export type ProductionCategory = 'Web novela' | 'Web série';

export type ProductionStatus = 'Finalizada';

export type UnitType = 'capítulos' | 'episódios';

export interface ChapterEpisode {
  number: number;
  label: string; // e.g. "Capítulo 01" or "Episódio 01"
  slug: string;  // e.g. "capitulo-01" or "episodio-01"
  title?: string;
  summary?: string;
  content?: string;
  pdfPages?: string[];
  videoUrl?: string;
}

export interface WebProduction {
  id: string;
  title: string;
  slug: string;
  author: string;
  category: ProductionCategory;
  unitType: UnitType;
  totalUnits: number;
  status: ProductionStatus;
  synopsis: string;
  coverImage?: string; // path or URL to official cover
  featured?: boolean;
  highlightOrder?: number;
  episodes: ChapterEpisode[];
  releaseYear?: string;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio?: string;
  photoUrl?: string;
}

export type ViewMode =
  | { type: 'home' }
  | { type: 'catalog'; category?: ProductionCategory }
  | { type: 'categories' }
  | { type: 'production'; slug: string }
  | { type: 'chapter'; productionSlug: string; chapterSlug: string }
  | { type: 'authors' }
  | { type: 'author'; authorSlug: string }
  | { type: 'about' }
  | { type: 'contact' }
  | { type: 'submit-project' };
