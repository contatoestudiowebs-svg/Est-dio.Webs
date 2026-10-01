// Manages official artwork associations and preserves official assets
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'estudiowebs_custom_covers_v1';

// Preset official image URLs or asset paths if supplied
export const OFFICIAL_COVERS_REGISTRY: Record<string, string> = {};

export function getSavedCovers(): Record<string, string> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return OFFICIAL_COVERS_REGISTRY;
    return { ...OFFICIAL_COVERS_REGISTRY, ...JSON.parse(raw) };
  } catch {
    return OFFICIAL_COVERS_REGISTRY;
  }
}

export function saveCoverForSlug(slug: string, imageUrl: string): void {
  try {
    const current = getSavedCovers();
    current[slug] = imageUrl;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new Event('covers_updated'));
  } catch (err) {
    console.error('Failed to save cover', err);
  }
}

export function removeCoverForSlug(slug: string): void {
  try {
    const current = getSavedCovers();
    delete current[slug];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new Event('covers_updated'));
  } catch (err) {
    console.error('Failed to remove cover', err);
  }
}

export function useProductionCover(slug: string, defaultImage?: string): string | undefined {
  const [cover, setCover] = useState<string | undefined>(() => {
    const saved = getSavedCovers();
    if (slug in saved) return saved[slug] || undefined;
    return defaultImage || OFFICIAL_COVERS_REGISTRY[slug] || undefined;
  });

  useEffect(() => {
    const update = () => {
      const saved = getSavedCovers();
      if (slug in saved) {
        setCover(saved[slug] || undefined);
      } else {
        setCover(OFFICIAL_COVERS_REGISTRY[slug] || defaultImage || undefined);
      }
    };
    window.addEventListener('covers_updated', update);
    return () => window.removeEventListener('covers_updated', update);
  }, [slug, defaultImage]);

  return cover;
}
