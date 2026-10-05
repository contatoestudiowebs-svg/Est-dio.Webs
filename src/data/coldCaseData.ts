import { EPISODE_01_PAGES } from './coldCaseEpisodes/episode01';
import { EPISODE_02_PAGES } from './coldCaseEpisodes/episode02';
import { EPISODE_03_PAGES } from './coldCaseEpisodes/episode03';
import { EPISODE_04_PAGES } from './coldCaseEpisodes/episode04';
import { EPISODE_05_PAGES } from './coldCaseEpisodes/episode05';
import { EPISODE_06_PAGES } from './coldCaseEpisodes/episode06';
import { ChapterEpisode } from '../types';

export interface ColdCaseEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const COLD_CASE_EPISODES_RAW: ColdCaseEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — Cicatrizes do Tempo',
    summary:
      'Um antigo desaparecimento infantil volta à tona quando uma fotografia surge misteriosamente anos depois. Laura e Hélio investigam o sumiço de um menino querido por toda a vizinhança e descobrem que, por trás de uma rua aparentemente tranquila, existiam segredos que marcaram vidas para sempre.',
    pages: EPISODE_01_PAGES,
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — A Última Cena',
    summary:
      'Uma atriz promissora morre pouco antes de subir ao palco em uma noite que chocou o meio artístico. Décadas depois, uma nova evidência reabre o caso e revela rivalidades, paixões e traições escondidas atrás das cortinas.',
    pages: EPISODE_02_PAGES,
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — Contas do Passado',
    summary:
      'Um empresário é encontrado morto e a polícia da época encerra rapidamente a investigação. Quando antigos registros financeiros reaparecem, Laura descobre que dívidas emocionais e financeiras podem ser ainda mais perigosas que qualquer arma.',
    pages: EPISODE_03_PAGES,
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — Pecados Ocultos',
    summary:
      'O assassinato brutal de um padre dentro de uma igreja permanece sem solução por anos. Uma carta anônima enviada à delegacia reacende o caso e leva a equipe a confrontar hipocrisia, culpa e segredos guardados sob a fé.',
    pages: EPISODE_04_PAGES,
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — Silêncio Mortal',
    summary:
      'A morte de uma criança em um hospital infantil sempre foi tratada como fatalidade. Porém, o depoimento inesperado de um ex-funcionário indica que alguém pode ter manipulado aquela noite. Laura mergulha em um caso devastador onde o silêncio custou caro demais.',
    pages: EPISODE_05_PAGES,
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — Noite do Fim',
    summary:
      'Um crime ocorrido em uma estrada deserta durante uma noite chuvosa deixou apenas perguntas e versões contraditórias. Ao revisitar o caso, a equipe descobre que todos os envolvidos esconderam algo — e que uma única decisão destruiu várias vidas.',
    pages: EPISODE_06_PAGES,
  },
];

export const COLD_CASE_BRASIL_EPISODES: ChapterEpisode[] = COLD_CASE_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
  pdfPages: ep.pages,
}));
