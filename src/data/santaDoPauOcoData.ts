import { SANTA_EPISODE_01_PAGES } from './santaDoPauOcoEpisodes/episode01';
import { SANTA_EPISODE_02_PAGES } from './santaDoPauOcoEpisodes/episode02';
import { SANTA_EPISODE_03_PAGES } from './santaDoPauOcoEpisodes/episode03';
import { SANTA_EPISODE_04_PAGES } from './santaDoPauOcoEpisodes/episode04';
import { SANTA_EPISODE_05_PAGES } from './santaDoPauOcoEpisodes/episode05';
import { SANTA_EPISODE_06_PAGES } from './santaDoPauOcoEpisodes/episode06';
import { ChapterEpisode } from '../types';

export interface SantaEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const SANTA_DO_PAU_OCO_EPISODES_RAW: SantaEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — O Teste dos Filhos e a Doação',
    summary:
      'Baronesa liga para os filhos pedindo ajuda, e cada um deles inventam uma desculpa para não ajudar a mãe. Baronesa conversa com Fátima e se queixa dos filhos. Baronesa doa suas coisas para a igreja.',
    pages: SANTA_EPISODE_01_PAGES,
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — O Descaso e a Partida da Baronesa',
    summary:
      'Sandra chega à casa de Baronesa no momento em que estão levando as coisas. Sandra e Ademir se recusam a cuidar de Baronesa. Sandra, Ademir e Cláudio se encontram e falam sobre a situação da mãe, e que alguém precisa cuidar dela, Ademir sugere que deixem Fátima continuar cuidando de Baronesa. Sandra, Ademir e Cláudio recebem uma ligação de Fátima falando sobre Baronesa.',
    pages: SANTA_EPISODE_02_PAGES,
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — O Velório e a Ambição',
    summary:
      'No velório de Baronesa, os filhos se mostram preocupados com o testamento. O advogado conversa com Fátima sobre a decisão de Baronesa. Sandra finge sofrer a morte da mãe, e Ademir briga com ela. O advogado de Baronesa conversa com os filhos dela sobre o testamento. O advogado lê o testamento de Baronesa.',
    pages: SANTA_EPISODE_03_PAGES,
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — O Testamento e o Enigma',
    summary:
      'A leitura do testamento de Baronesa deixa seus filhos chateados. Fátima fica com a casa, o que os deixa ainda mais irritados. Fátima conta a todos sobre as últimas decisões de Baronesa. O advogado lê um enigma que Baronesa deixou de onde ela escondeu a maior parte de sua herança.',
    pages: SANTA_EPISODE_04_PAGES,
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — A Caçada na Paróquia e a Descoberta',
    summary:
      'Sandra, Ademir e Cláudio vão à igreja para tentar descobrir algo que Baronesa tenha doado. Os irmãos vão ao escritório da igreja conversar com o Padre. E ao revelarem suas intenções, o Padre coloca os três para fora. Cláudio sugere ir nas casas das senhoras da paróquia para tentar descobrir algo. Fátima pega a santa e encontra o documento da herança.',
    pages: SANTA_EPISODE_05_PAGES,
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — O Enigma Revelado',
    summary:
      'Sandra, Ademir e Cláudio vão a cada endereço dos fiéis da igreja. Claudio desconfia que Fátima sabe de algo. Eles confrontam Fátima, mas ela diz não saber de nada. Sandra volta à igreja para pedir ajuda ao Padre, mas ele diz que não tem como ajudar. Ademir encontra uma santa que era de Baronesa e quando ia fugindo, ele é flagrado por Sandra e Claudio. Os irmãos abrem a santa e encontram um bilhete.',
    pages: SANTA_EPISODE_06_PAGES,
  },
];

export const A_SANTA_DO_PAU_OCO_EPISODES: ChapterEpisode[] =
  SANTA_DO_PAU_OCO_EPISODES_RAW.map((ep) => ({
    id: `santa-${ep.slug}`,
    number: ep.number,
    label: ep.label,
    slug: ep.slug,
    title: ep.title,
    releaseDate: '2026',
    content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
    summary: ep.summary,
    pdfPages: ep.pages,
    isPdfScript: true,
  }));
