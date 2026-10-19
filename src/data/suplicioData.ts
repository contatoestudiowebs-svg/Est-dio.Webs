import { SUPLICIO_EPISODE_01_PAGES } from './suplicioEpisodes/episode01';
import { SUPLICIO_EPISODE_02_PAGES } from './suplicioEpisodes/episode02';
import { SUPLICIO_EPISODE_03_PAGES } from './suplicioEpisodes/episode03';
import { SUPLICIO_EPISODE_04_PAGES } from './suplicioEpisodes/episode04';
import { SUPLICIO_EPISODE_05_PAGES } from './suplicioEpisodes/episode05';
import { SUPLICIO_EPISODE_06_PAGES } from './suplicioEpisodes/episode06';
import { ChapterEpisode } from '../types';

export interface SuplicioEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const SUPLICIO_EPISODES_RAW: SuplicioEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — O Ausente',
    summary:
      'Sete anos após ser mandado embora de Loureiro Vitoriosa após a morte misteriosa de seu melhor amigo Ângelo, Carlos conclui a faculdade e descobre que sua mãe, Luara, está prestes a morrer. Na Fazenda Brasão, Alfredo celebra o noivado com Bibiana sob o olhar ardiloso de seu filho adotivo Juan. Ao correr de volta à terra natal, Carlos é envolvido por visões sangrentas do passado e pela morte brutal de Alfredo, reencontrando Juan no meio da tempestade.',
    pages: SUPLICIO_EPISODE_01_PAGES,
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — O Prelúdio',
    summary:
      'Sete anos antes, Alfredo traz o misterioso Juan de um internato para torná-lo irmão de Ângelo e futuro administrador da Fazenda Brasão. Entre segredos no quarto e uma confissão de amor no matagal, a tragédia explode quando Ângelo é encontrado morto e sem o coração no riacho. Padre Jamil quebra o sigilo de confissão e acusa Carlos abertamente na igreja, obrigando Luara e Santinha a ajudarem o garoto a escapar da fúria da cidade.',
    pages: SUPLICIO_EPISODE_02_PAGES,
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — O Desejo',
    summary:
      'No cemitério de Loureiro Vitoriosa, no funeral de Luara e Alfredo, Carlos é confrontado pelo olhar fixo e sedutor de Juan Brasão. Atraído até a Fazenda Brasão, Carlos vivencia alucinações tórridas e perturbadoras em meio a um calor inexplicável. Ao mesmo tempo, na igreja, o segredo sórdido entre o Padre Jamil e o acólito Rubenzinho tem um desfecho macabro: o padre é encontrado morto e pregado no altar com o rosto arrancado.',
    pages: SUPLICIO_EPISODE_03_PAGES,
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — O Ultimato',
    summary:
      'O novo padre Abel, caçador de demônios disfarçado, chega a Loureiro Vitoriosa. Durante a festa da quermesse, Carlos é aprisionado num círculo de sal e quase tragado para um abismo infernal, sendo resgatado por Abel. Nos estábulos da fazenda, o peão Josué, em transe violento, persegue Rubenzinho com um machado, enquanto na maternidade do hospital local todos os bebês recém-nascidos amanhecem sem vida.',
    pages: SUPLICIO_EPISODE_04_PAGES,
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — O Inferno',
    summary:
      'Rubenzinho sobrevive à tentativa de assassinato e se abriga com Abel e Carlos. O padre revela a lenda dos vampiros Caraybaqüera, nascidos de um antigo pacto com a deusa Ticê. Ao encontrarem Santinha morta e resgatarem Bibiana acorrentada viva na parede da Fazenda Brasão, Abel lidera a população em um ataque com tochas. No entanto, o fogo desperta um bacanal insano e, no subterrâneo, Carlos surge arrastando o corpo de Abel diante de Juan.',
    pages: SUPLICIO_EPISODE_05_PAGES,
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — Supplicium',
    summary:
      'No subterrâneo da cidade, revela-se a verdade estarrecedora: Carlos é o verdadeiro Caraybaqüera, sugador de energia vital e assassino de Ângelo. Para escapar da maldição eterna, Carlos planeja uma barganha de sangue com Anhangá sacrificando todos os 500 habitantes de Loureiro Vitoriosa. Uma perseguição desesperada contra Rubenzinho culmina num confronto com Cynthia, onde a vingança e o sacrifício selam o destino da cidade.',
    pages: SUPLICIO_EPISODE_06_PAGES,
  },
];

export const SUPLICIO_EPISODES: ChapterEpisode[] = SUPLICIO_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
  pdfPages: ep.pages,
}));
