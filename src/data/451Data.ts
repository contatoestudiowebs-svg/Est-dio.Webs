import { EPISODE_01_PAGES } from './451Episodes/episode01';
import { EPISODE_02_PAGES } from './451Episodes/episode02';
import { EPISODE_03_PAGES } from './451Episodes/episode03';
import { EPISODE_04_PAGES } from './451Episodes/episode04';
import { EPISODE_05_PAGES } from './451Episodes/episode05';
import { EPISODE_06_PAGES } from './451Episodes/episode06';
import { EPISODE_07_PAGES } from './451Episodes/episode07';
import { EPISODE_08_PAGES } from './451Episodes/episode08';
import { ChapterEpisode } from '../types';

export interface ScriptEpisode451 {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const RAW_451_EPISODES: ScriptEpisode451[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — Fumaça no Horizonte',
    summary:
      'Em uma sociedade onde livros são crimes e lembrar é perigoso, Rael vive obedecendo regras que nunca questionou. Enquanto o regime queima palavras em praça pública, uma resistência silenciosa mantém viva a memória — e uma pequena faísca começa a surgir.',
    pages: EPISODE_01_PAGES
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — A Faísca',
    summary:
      'Rael cruza o caminho de Lydia, uma jovem que desafia o silêncio imposto pelo Estado. Um encontro inesperado planta dúvidas profundas, enquanto o regime mostra que qualquer desvio será punido com fogo e medo.',
    pages: EPISODE_02_PAGES
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — Tela Branca',
    summary:
      'Uma atualização oficial promete “corrigir” memórias incoerentes. Mas, para alguns, o efeito é o oposto. Rael começa a lembrar do que não deveria — e percebe que a realidade pode estar sendo reescrita.',
    pages: EPISODE_03_PAGES
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — Palavras Proibidas',
    summary:
      'Um ritual público de punição revela o preço da desobediência. Nos subterrâneos, Rael conhece os Memorizadores — pessoas que guardam livros na mente. Entre palavras e cinzas, a culpa passa a assombrá-lo.',
    pages: EPISODE_04_PAGES
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — Os Apagados',
    summary:
      'O governo intensifica a caça aos infiltrados. Testes, suspeitas e perseguições se fecham em torno de Rael. Enquanto livros são salvos em silêncio, a confiança se torna um risco mortal.',
    pages: EPISODE_05_PAGES
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — A Falha',
    summary:
      'Algo no sistema não funciona como deveria. Fragmentos do passado de Rael retornam com força, provocando alucinações, violência e ruptura. A falha deixa de ser erro — e passa a ser ameaça.',
    pages: EPISODE_06_PAGES
  },
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07 — Fogo Cruzado',
    summary:
      'A repressão atinge seu ponto máximo. Refúgios são destruídos, vidas se perdem e escolhas precisam ser feitas em meio ao caos. Caçado por todos os lados, Rael cruza um limite sem volta.',
    pages: EPISODE_07_PAGES
  },
  {
    number: 8,
    label: 'Episódio 08',
    slug: 'episodio-08',
    title: 'Episódio 08 — Cinzas',
    summary:
      'Após o fogo, restam apenas ruínas, silêncios e memórias. O regime tenta apagar até seus próprios líderes, enquanto a resistência se reorganiza nas sombras. Nada termina — tudo se transforma.',
    pages: EPISODE_08_PAGES
  }
];

export const EPISODES_451: ChapterEpisode[] = RAW_451_EPISODES.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
  pdfPages: ep.pages
}));
