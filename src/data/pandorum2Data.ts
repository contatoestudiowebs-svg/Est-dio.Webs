import { EPISODE_01_PAGES } from './pandorum2Episodes/episode01';
import { EPISODE_02_PAGES } from './pandorum2Episodes/episode02';
import { EPISODE_03_PAGES } from './pandorum2Episodes/episode03';
import { EPISODE_04_PAGES } from './pandorum2Episodes/episode04';
import { EPISODE_05_PAGES } from './pandorum2Episodes/episode05';
import { EPISODE_06_PAGES } from './pandorum2Episodes/episode06';
import { EPISODE_07_PAGES } from './pandorum2Episodes/episode07';
import { ChapterEpisode } from '../types';

export interface Pandorum2EpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const PANDORUM_2_EPISODES_RAW: Pandorum2EpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — Misericórdia',
    summary:
      'Satir captura Holler, enquanto Lyka, Peter, Tommy, Jen, OG e Makar chegam à antiga cidade dos heróis, a Vila Odin. Galena está determinada a capturar Lyka a qualquer custo. Em um movimento inesperado, Satir sequestra Fany, a filha de Holler, iniciando um intenso terror psicológico.',
    pages: EPISODE_01_PAGES,
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — Outros',
    summary:
      'A insanidade de Satir atinge seu ápice com o assassinato de Fany. Nossos heróis enfrentam um atentado, mas conseguem sobreviver e capturar um tanque de guerra. Holler é descartado em um lixão, enquanto Yumileth se prepara para caçar os protagonistas. Outros adversários cercam Lyka, Peter, Tommy, Jen, OG e Makar.',
    pages: EPISODE_02_PAGES,
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — Revelação',
    summary:
      'Lyka, Peter, Tommy, Jen, OG e Makar são levados ao acampamento de Coran, onde ficam impressionados com a magnitude do local. Durante a estadia, algumas perguntas de Lyka e Peter são finalmente respondidas. Entretanto, Yumileth e sua equipe são atacados, resultando em eventos inesperados, e Galena revela suas verdadeiras intenções.',
    pages: EPISODE_03_PAGES,
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — O Reencontro',
    summary:
      'A tristeza permeia o grupo de Yumileth, que enfrenta mais um ataque. Tommy busca a verdade, mas Coran permanece vigilante. Peter e Tommy têm uma conversa significativa, onde recebem conselhos valiosos. Lyka é designada para uma missão crucial, onde confrontará seu inimigo.',
    pages: EPISODE_04_PAGES,
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — A Emboscada',
    summary:
      'Lyka recebe consolo e conselhos sobre a figura de Holler no acampamento. Um ataque embosca o acampamento, resultando na perda de muitas vidas entre os rebeldes. A guerra se intensifica, e Lyka se encontra cara a cara com Holler.',
    pages: EPISODE_05_PAGES,
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — A Surpresa',
    summary:
      'Diante de Holler, Lyka e Peter revelam temperamentos distintos. Yumileth flagra Galena em uma situação surpreendente. Os heróis fazem uma nova descoberta enquanto exploram a floresta.',
    pages: EPISODE_06_PAGES,
  },
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07 — A Decisão',
    summary:
      'Lyka é capturada e Galena expõe suas verdadeiras intenções em relação a ela. Peter e seu grupo são salvos por Coran, resultando em um desfecho trágico para a equipe de Yumileth. Satir tem uma conversa impactante com Mojave, intensificando seu ódio e fascínio pela morte.',
    pages: EPISODE_07_PAGES,
  },
];

export const PANDORUM_2_EPISODES: ChapterEpisode[] = PANDORUM_2_EPISODES_RAW.map((ep) => ({
  id: `pandorum-2-${ep.slug}`,
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
