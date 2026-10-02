import { useState, useEffect, useCallback } from 'react';

export interface ChapterComment {
  id: string;
  authorName: string;
  content: string;
  createdAt: string; // ISO string
  likes: number;
  reaction?: string;
  isAuthor?: boolean;
}

const CLICKS_STORAGE_PREFIX = 'estudiowebs_clicks_v1_';
const COMMENTS_STORAGE_PREFIX = 'estudiowebs_comments_v1_';
const SESSION_CLICKED_PREFIX = 'estudiowebs_session_viewed_';

// Deterministic seed for realistic baseline audience counts per episode
function getBaselineClicks(productionSlug: string, chapterSlug: string): number {
  let hash = 0;
  const str = `${productionSlug}/${chapterSlug}`;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const positive = Math.abs(hash);
  // Returns between 120 and 480
  return 120 + (positive % 360);
}

// Default initial comments based on chapter to foster community engagement
function getDefaultSeedComments(productionSlug: string, chapterSlug: string): ChapterComment[] {
  let hash = 0;
  const str = `${productionSlug}-${chapterSlug}`;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const positive = Math.abs(hash);

  const sampleNames = [
    'Marcos Vinicius',
    'Beatriz Alencar',
    'Camila Rocha',
    'Rodrigo Sampaio',
    'Fernanda Prado',
    'Lucas Mendes',
    'Juliana Paiva',
    'Thiago Neves',
    'Mariana Costa'
  ];

  const sampleComments = [
    'Que reviravolta incrível! O autor soube amarrar muito bem cada detalhe nessa parte.',
    'Estou totalmente preso nessa história desde o primeiro minuto. Ansioso para a continuação!',
    'Esse final me deixou sem palavras! A escrita e o ritmo são excelentes.',
    'A construção dos personagens aqui ficou impecável. Uma das melhores webs da emissora!',
    'Sensacional! O diálogo desse trecho foi muito forte e emocionante.'
  ];

  const sampleReactions = ['🔥', '👏', '❤️', '😱', '⭐'];

  const name1 = sampleNames[positive % sampleNames.length];
  const text1 = sampleComments[(positive + 1) % sampleComments.length];
  const reaction1 = sampleReactions[positive % sampleReactions.length];
  const likes1 = 4 + (positive % 18);

  const name2 = sampleNames[(positive + 4) % sampleNames.length];
  const text2 = sampleComments[(positive + 3) % sampleComments.length];
  const reaction2 = sampleReactions[(positive + 2) % sampleReactions.length];
  const likes2 = 2 + (positive % 12);

  // Return 2 realistic community comments
  return [
    {
      id: `seed-1-${positive}`,
      authorName: name1,
      content: text1,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(), // ~1 day ago
      likes: likes1,
      reaction: reaction1
    },
    {
      id: `seed-2-${positive}`,
      authorName: name2,
      content: text2,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // ~4 hours ago
      likes: likes2,
      reaction: reaction2
    }
  ];
}

// -------------------------------------------------------------
// CLICK COUNTER FUNCTIONS
// -------------------------------------------------------------

export function getChapterClicks(productionSlug: string, chapterSlug: string): number {
  try {
    const key = `${CLICKS_STORAGE_PREFIX}${productionSlug}_${chapterSlug}`;
    const stored = localStorage.getItem(key);
    if (stored !== null) {
      return parseInt(stored, 10) || 0;
    }
    const baseline = getBaselineClicks(productionSlug, chapterSlug);
    localStorage.setItem(key, baseline.toString());
    return baseline;
  } catch {
    return getBaselineClicks(productionSlug, chapterSlug);
  }
}

export function incrementChapterClicks(productionSlug: string, chapterSlug: string): number {
  try {
    const key = `${CLICKS_STORAGE_PREFIX}${productionSlug}_${chapterSlug}`;
    const current = getChapterClicks(productionSlug, chapterSlug);
    const updated = current + 1;
    localStorage.setItem(key, updated.toString());
    window.dispatchEvent(
      new CustomEvent('chapter_clicks_updated', {
        detail: { productionSlug, chapterSlug, clicks: updated }
      })
    );
    return updated;
  } catch {
    return getChapterClicks(productionSlug, chapterSlug) + 1;
  }
}

export function useChapterClicks(productionSlug: string, chapterSlug: string) {
  const [clicks, setClicks] = useState<number>(() =>
    getChapterClicks(productionSlug, chapterSlug)
  );

  const registerClick = useCallback(() => {
    const newCount = incrementChapterClicks(productionSlug, chapterSlug);
    setClicks(newCount);
  }, [productionSlug, chapterSlug]);

  useEffect(() => {
    // Initial fetch
    setClicks(getChapterClicks(productionSlug, chapterSlug));

    // Auto-count view once per session tab for realistic click accumulation
    const sessionKey = `${SESSION_CLICKED_PREFIX}${productionSlug}_${chapterSlug}`;
    if (!sessionStorage.getItem(sessionKey)) {
      sessionStorage.setItem(sessionKey, '1');
      registerClick();
    }

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (
        customEvent.detail &&
        customEvent.detail.productionSlug === productionSlug &&
        customEvent.detail.chapterSlug === chapterSlug
      ) {
        setClicks(customEvent.detail.clicks);
      }
    };

    window.addEventListener('chapter_clicks_updated', handleUpdate);
    return () => window.removeEventListener('chapter_clicks_updated', handleUpdate);
  }, [productionSlug, chapterSlug, registerClick]);

  return { clicks, registerClick };
}

// -------------------------------------------------------------
// COMMENTS FUNCTIONS
// -------------------------------------------------------------

export function getChapterComments(productionSlug: string, chapterSlug: string): ChapterComment[] {
  try {
    const key = `${COMMENTS_STORAGE_PREFIX}${productionSlug}_${chapterSlug}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
    const seed = getDefaultSeedComments(productionSlug, chapterSlug);
    localStorage.setItem(key, JSON.stringify(seed));
    return seed;
  } catch {
    return getDefaultSeedComments(productionSlug, chapterSlug);
  }
}

export function addChapterComment(
  productionSlug: string,
  chapterSlug: string,
  newComment: {
    authorName: string;
    content: string;
    reaction?: string;
    isAuthor?: boolean;
  }
): ChapterComment {
  const comments = getChapterComments(productionSlug, chapterSlug);
  const commentObj: ChapterComment = {
    id: `comment_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    authorName: newComment.authorName.trim(),
    content: newComment.content.trim(),
    createdAt: new Date().toISOString(),
    likes: 0,
    reaction: newComment.reaction,
    isAuthor: Boolean(newComment.isAuthor)
  };

  const updated = [commentObj, ...comments];
  try {
    const key = `${COMMENTS_STORAGE_PREFIX}${productionSlug}_${chapterSlug}`;
    localStorage.setItem(key, JSON.stringify(updated));
    window.dispatchEvent(
      new CustomEvent('chapter_comments_updated', {
        detail: { productionSlug, chapterSlug }
      })
    );
  } catch (err) {
    console.error('Failed to save comment', err);
  }

  return commentObj;
}

export function likeChapterComment(
  productionSlug: string,
  chapterSlug: string,
  commentId: string
): void {
  const comments = getChapterComments(productionSlug, chapterSlug);
  const updated = comments.map((c) => {
    if (c.id === commentId) {
      return { ...c, likes: c.likes + 1 };
    }
    return c;
  });

  try {
    const key = `${COMMENTS_STORAGE_PREFIX}${productionSlug}_${chapterSlug}`;
    localStorage.setItem(key, JSON.stringify(updated));
    window.dispatchEvent(
      new CustomEvent('chapter_comments_updated', {
        detail: { productionSlug, chapterSlug }
      })
    );
  } catch (err) {
    console.error('Failed to like comment', err);
  }
}

export function deleteChapterComment(
  productionSlug: string,
  chapterSlug: string,
  commentId: string
): void {
  const comments = getChapterComments(productionSlug, chapterSlug);
  const updated = comments.filter((c) => c.id !== commentId);

  try {
    const key = `${COMMENTS_STORAGE_PREFIX}${productionSlug}_${chapterSlug}`;
    localStorage.setItem(key, JSON.stringify(updated));
    window.dispatchEvent(
      new CustomEvent('chapter_comments_updated', {
        detail: { productionSlug, chapterSlug }
      })
    );
  } catch (err) {
    console.error('Failed to delete comment', err);
  }
}

export function useChapterComments(productionSlug: string, chapterSlug: string) {
  const [comments, setComments] = useState<ChapterComment[]>(() =>
    getChapterComments(productionSlug, chapterSlug)
  );

  useEffect(() => {
    setComments(getChapterComments(productionSlug, chapterSlug));

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (
        customEvent.detail &&
        customEvent.detail.productionSlug === productionSlug &&
        customEvent.detail.chapterSlug === chapterSlug
      ) {
        setComments(getChapterComments(productionSlug, chapterSlug));
      }
    };

    window.addEventListener('chapter_comments_updated', handleUpdate);
    return () => window.removeEventListener('chapter_comments_updated', handleUpdate);
  }, [productionSlug, chapterSlug]);

  const addComment = useCallback(
    (newComment: { authorName: string; content: string; reaction?: string; isAuthor?: boolean }) => {
      addChapterComment(productionSlug, chapterSlug, newComment);
      setComments(getChapterComments(productionSlug, chapterSlug));
    },
    [productionSlug, chapterSlug]
  );

  const likeComment = useCallback(
    (commentId: string) => {
      likeChapterComment(productionSlug, chapterSlug, commentId);
      setComments(getChapterComments(productionSlug, chapterSlug));
    },
    [productionSlug, chapterSlug]
  );

  const deleteComment = useCallback(
    (commentId: string) => {
      deleteChapterComment(productionSlug, chapterSlug, commentId);
      setComments(getChapterComments(productionSlug, chapterSlug));
    },
    [productionSlug, chapterSlug]
  );

  return { comments, addComment, likeComment, deleteComment };
}
