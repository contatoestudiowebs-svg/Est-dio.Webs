import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Send,
  Heart,
  User,
  Sparkles,
  CheckCircle2,
  Trash2,
  CornerDownRight,
  Smile,
  ShieldCheck
} from 'lucide-react';
import { useChapterComments, ChapterComment } from '../utils/chapterInteractions';
import { useManager } from '../utils/managerAuth';

interface ChapterCommentsSectionProps {
  productionTitle: string;
  productionSlug: string;
  chapterSlug: string;
  unitLabel: string;
  authorName: string;
}

const REACTIONS = [
  { emoji: '🔥', label: 'Amei' },
  { emoji: '😱', label: 'Tenso' },
  { emoji: '👏', label: 'Genial' },
  { emoji: '💔', label: 'Emocionante' },
  { emoji: '🤔', label: 'Teoria' },
  { emoji: '⭐', label: 'Nota 10' }
];

export function ChapterCommentsSection({
  productionTitle,
  productionSlug,
  chapterSlug,
  unitLabel,
  authorName
}: ChapterCommentsSectionProps) {
  const { comments, addComment, likeComment, deleteComment } = useChapterComments(
    productionSlug,
    chapterSlug
  );
  const { isManager } = useManager();

  const [name, setName] = useState(() => {
    try {
      return localStorage.getItem('estudiowebs_reader_name') || '';
    } catch {
      return '';
    }
  });
  const [content, setContent] = useState('');
  const [selectedReaction, setSelectedReaction] = useState<string>('🔥');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);
    try {
      localStorage.setItem('estudiowebs_reader_name', val);
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome ou apelido para comentar.');
      return;
    }
    if (!content.trim()) {
      setErrorMsg('Por favor, digite seu comentário.');
      return;
    }

    const isAuthor =
      name.trim().toLowerCase() === authorName.trim().toLowerCase() ||
      name.trim().toLowerCase().includes('autor');

    addComment({
      authorName: name.trim(),
      content: content.trim(),
      reaction: selectedReaction,
      isAuthor
    });

    setContent('');
    setErrorMsg('');
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 3000);
  };

  const formatCommentDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffMinutes = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (diffMinutes < 1) return 'Agora mesmo';
      if (diffMinutes < 60) return `Há ${diffMinutes} min`;
      if (diffHours < 24) return `Há ${diffHours} h`;
      if (diffDays === 1) return 'Ontem';
      if (diffDays < 7) return `Há ${diffDays} dias`;

      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
    } catch {
      return 'Recentemente';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm my-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#D80050] border border-rose-200 flex items-center justify-center shrink-0">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-brand">
                Espaço do Leitor
              </h3>
              <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                {comments.length} {comments.length === 1 ? 'comentário' : 'comentários'}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Compartilhe suas reações, impressões e teorias sobre {unitLabel} de{' '}
              <strong className="text-slate-700">{productionTitle}</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* New Comment Form */}
      <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-3">
          <div className="flex-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
              Seu Nome ou Apelido
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Ex: Ana Clara, Carlos..."
              maxLength={40}
              className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] transition"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
              Sua Reação
            </label>
            <div className="flex items-center gap-1.5 flex-wrap">
              {REACTIONS.map((r) => (
                <button
                  key={r.label}
                  type="button"
                  onClick={() => setSelectedReaction(r.emoji)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1 border ${
                    selectedReaction === r.emoji
                      ? 'bg-white border-[#D80050] text-[#D80050] shadow-xs'
                      : 'bg-white/80 border-slate-200 text-slate-600 hover:bg-white'
                  }`}
                  title={r.label}
                >
                  <span>{r.emoji}</span>
                  <span className="hidden md:inline text-[11px]">{r.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
            Seu Comentário sobre este {unitLabel}
          </label>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              if (errorMsg) setErrorMsg('');
            }}
            rows={3}
            placeholder={`O que achou deste ${unitLabel}? Deixe sua crítica, elogio ou expectativa para os próximos acontecimentos...`}
            maxLength={1000}
            className="w-full bg-white border border-slate-200 rounded-xl p-3.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#D80050] transition resize-y font-reading"
          />
        </div>

        {errorMsg && (
          <p className="text-xs text-rose-600 font-semibold mb-3">
            {errorMsg}
          </p>
        )}

        {submittedSuccess && (
          <div className="mb-3 p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Comentário publicado com sucesso! Obrigado por participar da audiência.</span>
          </div>
        )}

        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] text-slate-400">
            {content.length}/1000 caracteres
          </span>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-bold uppercase tracking-wider transition shadow-sm shadow-[#D80050]/20 flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Publicar Comentário</span>
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <Smile className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-700">Ainda não há comentários neste {unitLabel}.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Seja o primeiro leitor a compartilhar sua opinião!</p>
          </div>
        ) : (
          comments.map((comment) => {
            const isAuthorComment =
              comment.isAuthor ||
              comment.authorName.toLowerCase() === authorName.toLowerCase();

            return (
              <div
                key={comment.id}
                className={`p-4 sm:p-5 rounded-2xl border transition ${
                  isAuthorComment
                    ? 'bg-rose-50/40 border-rose-200/80 shadow-xs'
                    : 'bg-white border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    {/* User Avatar */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shadow-xs shrink-0 ${
                        isAuthorComment
                          ? 'bg-[#D80050] text-white'
                          : 'bg-slate-900 text-white'
                      }`}
                    >
                      {comment.authorName.charAt(0).toUpperCase()}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-black text-slate-900">
                          {comment.authorName}
                        </span>

                        {isAuthorComment && (
                          <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#D80050] text-white flex items-center gap-0.5">
                            <Sparkles className="w-2.5 h-2.5" />
                            Autor da Obra
                          </span>
                        )}

                        {comment.reaction && (
                          <span className="text-xs" title="Reação do leitor">
                            {comment.reaction}
                          </span>
                        )}
                      </div>

                      <span className="text-[10px] text-slate-400 font-medium">
                        {formatCommentDate(comment.createdAt)}
                      </span>
                    </div>
                  </div>

                  {/* Actions: Like & Delete */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => likeComment(comment.id)}
                      className="px-2.5 py-1 rounded-lg border border-slate-200 hover:border-rose-200 hover:bg-rose-50/60 text-slate-600 hover:text-[#D80050] text-[11px] font-bold transition flex items-center gap-1"
                      title="Curtir este comentário"
                    >
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" />
                      <span>{comment.likes}</span>
                    </button>

                    {isManager && (
                      <button
                        onClick={() => deleteComment(comment.id)}
                        className="p-1 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                        title="Excluir comentário (Gerenciador)"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-reading whitespace-pre-line pl-10">
                  {comment.content}
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
