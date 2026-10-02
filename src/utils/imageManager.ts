// Manages official artwork associations and preserves official assets
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'estudiowebs_custom_covers_v1';

// Preset official image URLs or asset paths if supplied
export const OFFICIAL_COVERS_REGISTRY: Record<string, string> = {
  'o-suplicio':
    'https://static.wixstatic.com/media/cbfc82_5bd3799907fb4098bcde7a2e63509b90~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_5bd3799907fb4098bcde7a2e63509b90~mv2.png',
  'ponto-fraco':
    'https://static.wixstatic.com/media/cbfc82_191ef35d6bfb4a72b331172bf74a5e0d~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_191ef35d6bfb4a72b331172bf74a5e0d~mv2.png',
  '451':
    'https://static.wixstatic.com/media/cbfc82_835265d7f6d24cef9e9458b0f71b6fd9~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_835265d7f6d24cef9e9458b0f71b6fd9~mv2.png',
  'homem-com-h':
    'https://static.wixstatic.com/media/cbfc82_9a0bf519062c49cea2fe3bbf5615a4be~mv2.png/v1/fill/w_369,h_536,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cbfc82_9a0bf519062c49cea2fe3bbf5615a4be~mv2.png',
  'a-santa-do-pau-oco':
    'https://static.wixstatic.com/media/cbfc82_fc095adec5a34548bd1545878589d704~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_fc095adec5a34548bd1545878589d704~mv2.png',
  'medusa-a-maldicao-de-atena':
    'https://static.wixstatic.com/media/cbfc82_eeb860d4f26d46438edd141a87f0b1e8~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_eeb860d4f26d46438edd141a87f0b1e8~mv2.png',
  'pandorum':
    'https://static.wixstatic.com/media/cbfc82_210d33e510854ef79aac322b4003038e~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_210d33e510854ef79aac322b4003038e~mv2.png',
  'pandorum-2':
    'https://static.wixstatic.com/media/cbfc82_96c8315bda964573a3447f8949da9b69~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_96c8315bda964573a3447f8949da9b69~mv2.png',
  'infidelidade':
    'https://static.wixstatic.com/media/cbfc82_cb487eb87446490895186f78c158901e~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_cb487eb87446490895186f78c158901e~mv2.png',
  'um-novo-rei-2':
    'https://static.wixstatic.com/media/cbfc82_91a9976d35da412bb0a852f63a297778~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_91a9976d35da412bb0a852f63a297778~mv2.png',
  'rasga-mortalha-2':
    'https://static.wixstatic.com/media/cbfc82_a2be2c24c82f41a9bc43bd0b8a40ba8d~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_a2be2c24c82f41a9bc43bd0b8a40ba8d~mv2.png',
  'cold-case-brasil':
    'https://static.wixstatic.com/media/cbfc82_fde61471066b4daab6be2def3a9f96b2~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_fde61471066b4daab6be2def3a9f96b2~mv2.png',
  'caminho-ao-poder':
    'https://static.wixstatic.com/media/cbfc82_294c7c2efa1c48458e17b151396cb510~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_294c7c2efa1c48458e17b151396cb510~mv2.png',
  'as-mina':
    'https://static.wixstatic.com/media/cbfc82_cb5f1af4c8e7409d83964e1bb0644ac7~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_cb5f1af4c8e7409d83964e1bb0644ac7~mv2.png',
  'sena':
    'https://static.wixstatic.com/media/cbfc82_2a44a37db9514aa99f3f78485abc1abc~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_2a44a37db9514aa99f3f78485abc1abc~mv2.png',
  'no-te-pido-flores':
    'https://static.wixstatic.com/media/cbfc82_bc4859489b434059b3490eca04ac8b1d~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_bc4859489b434059b3490eca04ac8b1d~mv2.png',
  'um-novo-rei-1-temporada':
    'https://static.wixstatic.com/media/cbfc82_c64e16466fcb49278c87acf083f99b97~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_c64e16466fcb49278c87acf083f99b97~mv2.png',
  'acesso-1':
    'https://static.wixstatic.com/media/cbfc82_d43f0a0c15674fc797184d3c03eb81da~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_d43f0a0c15674fc797184d3c03eb81da~mv2.png',
  'amar-a-seu-modo':
    'https://static.wixstatic.com/media/cbfc82_942fc93608c44ae99f933eb023b12bc3~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_942fc93608c44ae99f933eb023b12bc3~mv2.png',
  'as-mina-parte-2':
    'https://static.wixstatic.com/media/cbfc82_cf3ab50200af4a9da3577418d1db1b25~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_cf3ab50200af4a9da3577418d1db1b25~mv2.png',
  'busca-de-bercos':
    'https://static.wixstatic.com/media/cbfc82_67a3c93990124e7cbef2fa9b05ba8f22~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_67a3c93990124e7cbef2fa9b05ba8f22~mv2.png',
  'coracoes-de-acucar':
    'https://static.wixstatic.com/media/cbfc82_326fcfe93cc7437b8ab7d385cc46b378~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_326fcfe93cc7437b8ab7d385cc46b378~mv2.png',
  'debora-e-rebeca':
    'https://static.wixstatic.com/media/cbfc82_abde23eba1b647d7a3d370e1a6a304d2~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_abde23eba1b647d7a3d370e1a6a304d2~mv2.png',
  'destino-ao-coracao':
    'https://static.wixstatic.com/media/cbfc82_4eded516fbfb41a3a884ea530520beb1~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_4eded516fbfb41a3a884ea530520beb1~mv2.png',
  'eu-sou-piaf':
    'https://static.wixstatic.com/media/cbfc82_8abfe7f8146048788a481427bfb9c63b~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_8abfe7f8146048788a481427bfb9c63b~mv2.png',
  'nada-alem-do-seu-amor':
    'https://static.wixstatic.com/media/cbfc82_1781c057924d42a4ac6ddabec34f3ee1~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_1781c057924d42a4ac6ddabec34f3ee1~mv2.png',
  'rute':
    'https://static.wixstatic.com/media/cbfc82_6fc924ffddf24c0b846d2d6472f8299a~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_6fc924ffddf24c0b846d2d6472f8299a~mv2.png',
  'sangue-cruzado':
    'https://static.wixstatic.com/media/cbfc82_76db79f328ee4d27809aab184860b4ba~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_76db79f328ee4d27809aab184860b4ba~mv2.png',
  'socio-do-amor':
    'https://static.wixstatic.com/media/cbfc82_9ada38d3744c4f66a4c6a0c377b41f06~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_9ada38d3744c4f66a4c6a0c377b41f06~mv2.png',
  'topazio':
    'https://static.wixstatic.com/media/cbfc82_bddc617935314ef48dffa8bbf62515a7~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_bddc617935314ef48dffa8bbf62515a7~mv2.png',
};

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
