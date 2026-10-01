import { Author } from '../types';
import { PRODUCTIONS_DATA } from './productions';

export const AUTHORS_DATA: Author[] = [
  {
    id: 'fred-reids',
    name: 'Fred Reids',
    slug: 'fred-reids'
  },
  {
    id: 'fernando-ricoboni',
    name: 'Fernando Ricoboni',
    slug: 'fernando-ricoboni'
  },
  {
    id: 'edney-matias',
    name: 'Edney Matias',
    slug: 'edney-matias'
  },
  {
    id: 'liz-santos',
    name: 'Liz Santos',
    slug: 'liz-santos'
  },
  {
    id: 'everton-b-dutra',
    name: 'Everton B Dutra',
    slug: 'everton-b-dutra'
  },
  {
    id: 'guilhardo-almeida',
    name: 'Guilhardo Almeida',
    slug: 'guilhardo-almeida'
  }
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS_DATA.find((a) => a.slug === slug);
}

export function getAuthorWorksCount(authorName: string): { total: number; novelas: number; series: number } {
  const works = PRODUCTIONS_DATA.filter((p) => p.author.toLowerCase() === authorName.toLowerCase());
  return {
    total: works.length,
    novelas: works.filter((w) => w.category === 'Web novela').length,
    series: works.filter((w) => w.category === 'Web série').length
  };
}
