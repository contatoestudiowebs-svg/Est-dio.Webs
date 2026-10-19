import { PANDORUM_EPISODE_01_PAGES } from './pandorumEpisodes/episode01';
import { PANDORUM_EPISODE_02_PAGES } from './pandorumEpisodes/episode02';
import { PANDORUM_EPISODE_03_PAGES } from './pandorumEpisodes/episode03';
import { PANDORUM_EPISODE_04_PAGES } from './pandorumEpisodes/episode04';
import { PANDORUM_EPISODE_05_PAGES } from './pandorumEpisodes/episode05';
import { PANDORUM_EPISODE_06_PAGES } from './pandorumEpisodes/episode06';
import { PANDORUM_EPISODE_07_PAGES } from './pandorumEpisodes/episode07';
import { PANDORUM_EPISODE_08_PAGES } from './pandorumEpisodes/episode08';
import { ChapterEpisode } from '../types';

export interface PandorumEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const PANDORUM_EPISODES_RAW: PandorumEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — Um',
    summary:
      'Uma purificação brutal na floresta, no meio do caos, a Revolução consegue resgatar alguns cidadãos. Satir descobre a traição de um de seus soldados mais leais.',
    pages: PANDORUM_EPISODE_01_PAGES,
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — Sentença',
    summary:
      'Durante um ataque mortal, Matias perde a vida, deixando Lyka como única sobrevivente. Ela é resgatada por Peter, que a leva em segurança.',
    pages: PANDORUM_EPISODE_02_PAGES,
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — Salvação',
    summary:
      'Uma emboscada na floresta resulta na morte de militantes da Revolução, abalando profundamente o grupo. Galena se fragiliza pela perda de Matias.',
    pages: PANDORUM_EPISODE_03_PAGES,
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — Revelação',
    summary:
      'O segredo da filha perdida de Satir é finalmente revelado, enquanto Lyka se prepara para assumir um papel central como símbolo da Revolução.',
    pages: PANDORUM_EPISODE_04_PAGES,
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — Aliados',
    summary:
      'Zatura tenta desvendar a verdade sobre a filha de Satir. Enquanto isso, Tommy é enviado em uma missão de patrulha, onde encontra forças do governo. Ao mesmo tempo, a sobrinha de Galena, Yumileth, reaparece.',
    pages: PANDORUM_EPISODE_05_PAGES,
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — Sobrevivência',
    summary:
      'Galena finalmente se reencontra com sua sobrinha, Yumileth, enquanto a insubordinação dentro da Revolução é punida com severidade, resultando em mais mortes.',
    pages: PANDORUM_EPISODE_06_PAGES,
  },
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07 — Descoberta',
    summary:
      'Holler salva Zatura de uma situação de perigo mortal, enquanto uma importante descoberta é feita nas profundezas da floresta, alterando o rumo da resistência.',
    pages: PANDORUM_EPISODE_07_PAGES,
  },
  {
    number: 8,
    label: 'Episódio 08',
    slug: 'episodio-08',
    title: 'Episódio 08 — O Início do Fim',
    summary:
      'Holler foge com sua família para proteger suas vidas, enquanto Lyka descobre a verdade sobre sua origem e parte em busca de seu destino, assumindo o controle de seu futuro.',
    pages: PANDORUM_EPISODE_08_PAGES,
  },
];

export const PANDORUM_EPISODES: ChapterEpisode[] = PANDORUM_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
  pdfPages: ep.pages,
}));
