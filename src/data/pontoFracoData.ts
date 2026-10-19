import { PONTO_FRACO_EPISODE_01_PAGES } from './pontoFracoEpisodes/episode01';
import { PONTO_FRACO_EPISODE_02_PAGES } from './pontoFracoEpisodes/episode02';
import { PONTO_FRACO_EPISODE_03_PAGES } from './pontoFracoEpisodes/episode03';
import { PONTO_FRACO_EPISODE_04_PAGES } from './pontoFracoEpisodes/episode04';
import { PONTO_FRACO_EPISODE_05_PAGES } from './pontoFracoEpisodes/episode05';
import { PONTO_FRACO_EPISODE_06_PAGES } from './pontoFracoEpisodes/episode06';
import { ChapterEpisode } from '../types';

export interface PontoFracoEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const PONTO_FRACO_EPISODES_RAW: PontoFracoEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01',
    summary:
      'Frida ajusta a arma de longo alcance e atira matando um homem. Frida entra em um prédio, desconfiada pega a sua arma e rende Dorotéia. As duas conversam. Dorotéia passa um outro trabalho para Frida e passa as instruções. Dorotéia conta a Frida que o Chefão está querendo a cabeça dela.',
    pages: PONTO_FRACO_EPISODE_01_PAGES,
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02',
    summary:
      'Frida se infiltra no hospital e mata um homem. Frida vai para a casa que Dorotéia alugou. Ela conversa com James por mensagem. Depois de conversar com James, Frida abre um vinho, um homem surge e a surpreende, os dois lutam, até que Frida o rende, ela o questiona e depois mata o homem. Frida encontra-se com Dorotéia e conta o que aconteceu. Frida passa mal e descobre que está grávida. Frida e Dorotéia discutem e Frida vai embora.',
    pages: PONTO_FRACO_EPISODE_02_PAGES,
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03',
    summary:
      'Frida entra no motel e mata o deputado. Dorotéia é capturada e torturada pelo Chefão, para que ela entregue a Frida. Frida encontra Dorotéia toda machucada. Enquanto cuida dos ferimentos de Dorotéia, Frida conta que vai abandonar a vida de assassina para cuidar do seu filho. James surpreende Frida.',
    pages: PONTO_FRACO_EPISODE_03_PAGES,
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04',
    summary:
      'Frida luta para se salvar. Frida dá luz a um menino. Uma mulher toma o bebê de Frida e mata a mulher que ajudou Frida. Frida e Dorotéia são sequestradas por homens do Chefão. Ele dá ordem para que matem as duas. Anos depois… Dorotéia encontra Frida e conta que sabe onde James está e que ele trabalha para o Chefão. O Chefão recebe informações sobre Frida. Ele dá ordem a Luiz para encontrar e matar Frida.',
    pages: PONTO_FRACO_EPISODE_04_PAGES,
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05',
    summary:
      'O Chefão liga para Luiz e pede para ele voltar ao Rio. Dorotéia se encontra com Frida e conta que o Chefão já sabe que ela voltou e está atrás dela. Frida encontra James e o persegue. Os dois lutam e Frida conta a James que teve um filho dele.',
    pages: PONTO_FRACO_EPISODE_05_PAGES,
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06',
    summary:
      'Após James ser baleado e morrer durante a luta corporal, Dorotéia atrai Frida para uma emboscada em uma luxuosa festa do Chefão. Frida e Luiz acordam amarrados em um silo de concreto, onde Dorotéia revela ser o verdadeiro Chefão e que Luiz é o filho roubado de Frida, treinado para matá-la em vingança. Dorotéia liga as comportas para afogá-los, mas mãe e filho conseguem sobreviver. Dois anos depois, em Roma, Frida e Luiz executam sua vingança final.',
    pages: PONTO_FRACO_EPISODE_06_PAGES,
  },
];

export const PONTO_FRACO_EPISODES: ChapterEpisode[] = PONTO_FRACO_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
  pdfPages: ep.pages,
}));
