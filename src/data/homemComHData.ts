import { HOMEM_EPISODE_01_PAGES } from './homemComHEpisodes/episode01';
import { HOMEM_EPISODE_02_PAGES } from './homemComHEpisodes/episode02';
import { HOMEM_EPISODE_03_PAGES } from './homemComHEpisodes/episode03';
import { HOMEM_EPISODE_04_PAGES } from './homemComHEpisodes/episode04';
import { HOMEM_EPISODE_05_PAGES } from './homemComHEpisodes/episode05';
import { HOMEM_EPISODE_06_PAGES } from './homemComHEpisodes/episode06';
import { HOMEM_EPISODE_07_PAGES } from './homemComHEpisodes/episode07';
import { HOMEM_EPISODE_08_PAGES } from './homemComHEpisodes/episode08';
import { ChapterEpisode } from '../types';

export interface HomemEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const HOMEM_COM_H_EPISODES_RAW: HomemEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — O Consultor Inesperado',
    summary:
      'As colegas de Humberto começam a discutir abertamente sobre suas vidas sexuais, incluindo detalhes que o deixam desconfortável. No entanto, elas começam a pedir conselhos a Humberto, vendo o como uma "fonte neutra" que pode oferecer uma perspectiva masculina sobre o que os homens realmente pensam. Humberto, nervoso, tenta responder de forma diplomática, mas acaba se envolvendo em uma série de mal-entendidos hilários.',
    pages: HOMEM_EPISODE_01_PAGES,
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — O Representante da Classe',
    summary:
      'Em uma reunião de equipe, as mulheres começam a discutir os problemas que têm com os homens em suas vidas, desde namorados e maridos até chefes e irmãos. Elas acabam nomeando Humberto como "representante" de todos os homens, exigindo que ele explique o comportamento masculino e até peça desculpas por ações coletivas. Humberto se vê na posição desconfortável de defender o "time" masculino enquanto tenta manter a paz no escritório.',
    pages: HOMEM_EPISODE_02_PAGES,
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — A Voz da Experiência',
    summary:
      'As colegas de trabalho começam a discutir questões familiares, como a criação dos filhos, as dificuldades com sogras e as dinâmicas entre irmãos. Humberto, que tem uma família grande e tradicional, compartilha suas próprias experiências, mas suas soluções "simples" para problemas complexos acabam gerando uma série de reações cômicas, pois as mulheres não veem as coisas da mesma forma.',
    pages: HOMEM_EPISODE_03_PAGES,
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — O Estilista Involuntário',
    summary:
      'Uma das colegas de Humberto está se preparando para um evento importante e não consegue decidir o que vestir. As outras mulheres no escritório também estão divididas, e Humberto é chamado para dar a palavra final. Sem entender muito de moda, ele acaba escolhendo o que acha mais "prático", o que gera uma reviravolta inesperada: seu gosto acaba virando tendência entre as colegas.',
    pages: HOMEM_EPISODE_04_PAGES,
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — O Juiz de Beleza',
    summary:
      'Quando uma discussão sobre produtos de beleza e tratamentos estéticos esquenta, Humberto é chamado para julgar qual dos produtos é mais eficaz. Ele tenta evitar se comprometer, mas acaba testando alguns produtos por curiosidade, o que leva a situações engraçadas no escritório, como aparecer com a pele brilhando após aplicar um creme “milagroso”.',
    pages: HOMEM_EPISODE_05_PAGES,
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — O Perigo Desconhecido',
    summary:
      'Humberto percebe que o humor de suas colegas está especialmente volátil, mas não entende o porquê. Quando descobre que várias delas estão sincronizadas em seus ciclos menstruais, ele tenta ser extra cuidadoso com suas palavras e ações. Isso leva a uma série de gafes e mal-entendidos que resultam em situações cômicas, enquanto Humberto tenta navegar por esse "campo minado" emocional.',
    pages: HOMEM_EPISODE_06_PAGES,
  },
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07 — O Tio Humberto',
    summary:
      'Quando uma das colegas traz seu bebê para o escritório, Humberto é "recrutado" para cuidar do bebê enquanto ela participa de uma reunião. Ele tenta seguir as instruções, mas acaba criando uma série de situações engraçadas enquanto tenta acalmar o bebê, mudá-lo e mantê-lo entretido, provando que ser "tio" pode ser mais desafiador do que ele imaginava.',
    pages: HOMEM_EPISODE_07_PAGES,
  },
  {
    number: 8,
    label: 'Episódio 08',
    slug: 'episodio-08',
    title: 'Episódio 08 — O Organizador Desajeitado',
    summary:
      'Quando o escritório decide organizar uma festa temática, as mulheres pedem a Humberto que ajude na organização. Ele tenta impor um tema "masculino", mas é rapidamente superado pelas ideias das mulheres. No final, Humberto se vê no meio de uma festa cheia de glitter e glamour, tentando se adaptar enquanto todos se divertem às suas custas.',
    pages: HOMEM_EPISODE_08_PAGES,
  },
];

export const HOMEM_COM_H_EPISODES: ChapterEpisode[] = HOMEM_COM_H_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
  pdfPages: ep.pages,
}));
