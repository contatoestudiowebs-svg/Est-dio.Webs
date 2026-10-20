import { ChapterEpisode } from '../types';

export interface PandorumSeason1EpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const PANDORUM_SEASON_1_EPISODES_RAW: PandorumSeason1EpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — "UM"',
    summary:
      'Uma purificação brutal na floresta, no meio do caos, a Revolução consegue resgatar alguns cidadãos. Satir descobre a traição de um de seus soldados mais leais.',
    pages: [
      `ESTÚDIO.WEBS 01 x 01\nPANDORUM\nSérie de Fernando Gibeli Ricoboni\n“UM”`,
      `CENA 1 - EXT. PLANETA TERRA – FLASHBACK/APRESENTAÇÃO\nImagens panorâmicas de um mundo perfeito antes do apocalipse. Lyka narra como a ganância dos tiranos dividiu a Terra em setores opressores e como Satir estabeleceu o terror.`,
      `CENA 2 - EXT. FLORESTA – DIA\nHoller e suas tropas massacram brutalmente os civis na clareira. No meio dos escombros e tiros, os rebeldes da Revolução liderados por Peter conseguem resgatar um grupo de sobreviventes.`,
      `CENA 3 - INT. PALÁCIO DO CENTRO – NOITE\nSatir assiste com prazer às chamas do massacre. Ao analisar os relatórios de campo, ele descobre com ódio a traição do Comandante Matias, seu homem de confiança.`
    ],
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — "SENTENÇA"',
    summary:
      'Durante um ataque mortal, Matias perde a vida, deixando Lyka como única sobrevivente. Ela é resgatada por Peter, que a leva em segurança.',
    pages: [
      `ESTÚDIO.WEBS 01 x 02\nPANDORUM\nSérie de Fernando Gibeli Ricoboni\n“SENTENÇA”`,
      `CENA 1 - INT. CASA DE MATIAS – NOITE\nSoldados invadem a residência em um ataque impiedoso. Kiria e Ingdar são assassinados, e Matias esconde Lyka no porão secreto antes de ser fuzilado por Holler.`,
      `CENA 2 - EXT. FLORESTA – NOITE\nLyka foge desesperada através da mata enquanto a casa queima. Um soldado a persegue e atira, mas Tommy e Peter chegam a tempo de abater o agressor.`,
      `CENA 3 - EXT. FLORESTA – NOITE\nPeter tranquiliza Lyka, acolhendo-a e prometendo proteção enquanto o comboio rebelde segue para o refúgio do Setor Kappa.`
    ],
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — "SALVAÇÃO"',
    summary:
      'Uma emboscada na floresta resulta na morte de militantes da Revolução, abalando profundamente o grupo. Galena se fragiliza pela perda de Matias.',
    pages: [
      `ESTÚDIO.WEBS 01 x 03\nPANDORUM\nSérie de Fernando Gibeli Ricoboni\n“SALVAÇÃO”`,
      `CENA 1 - EXT. FLORESTA – NOITE\nUma emboscada dos soldados de Satir com lança-mísseis atinge a caminhonete rebelde, matando Diego e Pork em uma explosão aterradora.`,
      `CENA 2 - EXT. CLAREIRA – NOITE\nAeronaves de combate da resistência surgem de surpresa, bombardeando as tropas governamentais e salvando Peter e Lyka do massacre.`,
      `CENA 3 - INT. AERONAVE – NOITE\nGalena descobre que a jovem resgatada é filha de Matias. O luto pela perda de seu aliado mais valioso abala a frieza habitual da líder rebelde.`
    ],
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — "REVELAÇÃO"',
    summary:
      'O segredo da filha perdida de Satir é finalmente revelado, enquanto Lyka se prepara para assumir um papel central como símbolo da Revolução.',
    pages: [
      `ESTÚDIO.WEBS 01 x 04\nPANDORUM\nSérie de Fernando Gibeli Ricoboni\n“REVELAÇÃO”`,
      `CENA 1 - INT. SALA DE GALENA – NOITE\nGalena, Dorum e Tyrel discutem o impacto político da nova recruta. O segredo explode: Lyka carrega o sangue do próprio Satir, sendo sua filha biológica.`,
      `CENA 2 - INT. COZINHA DO PALÁCIO – NOITE\nCorina revela à criada Hilia o passado violento em que Satir violentou Kiria há 23 anos antes de ela fugir grávida do palácio.`,
      `CENA 3 - INT. SALA DE TREINAMENTO – NOITE\nPeter treina Lyka em combate corporal. No meio da tensão, os dois se beijam, mas são interrompidos pela zombaria rancorosa de Tommy.`
    ],
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — "ALIADOS"',
    summary:
      'Zatura tenta desvendar a verdade sobre a filha de Satir. Enquanto isso, Tommy é enviado em uma missão de patrulha, onde encontra forças do governo. Ao mesmo tempo, a sobrinha de Galena, Yumileth, reaparece.',
    pages: [
      `ESTÚDIO.WEBS 01 x 05\nPANDORUM\nSérie de Fernando Gibeli Ricoboni\n“ALIADOS”`,
      `CENA 1 - INT. QUARTO DE ZATURA – NOITE\nSatir ameaça Hilia por saber demais. Zatura confronta o marido e leva um tapa, decidindo investigar quem é a filha oculta do ditador.`,
      `CENA 2 - EXT. REPRESA DO RIO ALUZ – MADRUGADA\nTommy e sua patrulha sofrem um ataque e Makar é ferido. Um grupo rebelde desconhecido liderado por Yumileth aparece e abate os soldados.`,
      `CENA 3 - INT. PALÁCIO – DIA\nSatir descobre a execução de sua patrulha e exige que Holler capture todos os rebeldes, ameaçando-o de morte.`
    ],
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — "SOBREVIVÊNCIA"',
    summary:
      'Galena finalmente se reencontra com sua sobrinha, Yumileth, enquanto a insubordinação dentro da Revolução é punida com severidade, resultando em mais mortes.',
    pages: [
      `ESTÚDIO.WEBS 01 x 06\nPANDORUM\nSérie de Fernando Gibeli Ricoboni\n“SOBREVIVÊNCIA”`,
      `CENA 1 - EXT. ACAMPAMENTO REBELDE – NOITE\nGalena reencontra sua sobrinha Yumileth após mais de duas décadas separadas pelas atrocidades do regime.`,
      `CENA 2 - INT. PALÁCIO DO GOVERNO – NOITE\nCorina é morta com um tiro na cabeça ao tentar fugir. Satir tortura psicologicamente Hilia com uma arma descarregada para silenciar qualquer dissidência.`,
      `CENA 3 - INT. SALA DE SATIR – NOITE\nZatura confronta Satir sobre seus crimes e ele a espanca violentamente com uma pá de lareira até deixá-la agonizante no chão.`
    ],
  },
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07 — "DESCOBERTA"',
    summary:
      'Holler salva Zatura de uma situação de perigo mortal, enquanto uma importante descoberta é feita nas profundezas da floresta, alterando o rumo da resistência.',
    pages: [
      `ESTÚDIO.WEBS 01 x 07\nPANDORUM\nSérie de Fernando Gibeli Ricoboni\n“DESCOBERTA”`,
      `CENA 1 - INT. SALA DE SATIR E COZINHA – NOITE\nHoller encontra Zatura ensanguentada, resgata-a nos braços e a leva secretamente para sua casa com a ajuda da esposa Alura.`,
      `CENA 2 - EXT. FLORESTA – NOITE\nPeter encontra a criada Hilia perdida na mata e a conduz com segurança até o refúgio do Setor Kappa.`,
      `CENA 3 - EXT. PRECIPÍCIO – NOITE\nLyka e Peter chegam à beira de um abismo e descobrem um gigantesco complexo com torres de mísseis e uma colossal cidade suspensa: o Paraíso.`
    ],
  },
  {
    number: 8,
    label: 'Episódio 08',
    slug: 'episodio-08',
    title: 'Episódio 08 — "O INÍCIO DO FIM"',
    summary:
      'Holler foge com sua família para proteger suas vidas, enquanto Lyka descobre a verdade sobre sua origem e parte em busca de seu destino, assumindo o controle de seu futuro.',
    pages: [
      `ESTÚDIO.WEBS 01 x 08\nPANDORUM\nSérie de Fernando Gibeli Ricoboni\n“O INÍCIO DO FIM”`,
      `CENA 1 - INT. ESCRITÓRIO DE SATIR – NOITE\nHoller recusa ordens de execução em massa e atira no ombro de Satir, fugindo em seguida para retirar sua família da cidade.`,
      `CENA 2 - INT. SALA DE TREINAMENTO – TARDE\nPeter revela a Lyka que Satir é seu pai biológico. Abalada e revoltada, ela decide marchar sozinha rumo ao Centro para destruí-lo.`,
      `CENA 3 - EXT. ENTRADA DA FLORESTA – NOITE\nPeter, Tommy, Makar, OG e Jen se unem a Lyka na marcha para a guerra final, enquanto Satir contempla a noite preparando a destruição de Pandorum.`
    ],
  },
];

export const PANDORUM_SEASON_1_EPISODES: ChapterEpisode[] =
  PANDORUM_SEASON_1_EPISODES_RAW.map((ep) => ({
    id: `pandorum-${ep.slug}`,
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
