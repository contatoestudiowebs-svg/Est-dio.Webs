export interface CommunityEpisode {
  number: number;
  title: string;
  slug: string;
  duration: string;
  summary: string;
  thumbnail: string;
  scenePreview?: string;
}

export interface CommunityStory {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  synopsis: string;
  creator: {
    name: string;
    handle: string;
    avatar: string;
    bio: string;
  };
  category: string;
  rating: number; // e.g. 9.8
  votesCount: number; // e.g. 1420
  totalEpisodes: number;
  durationTotal: string; // e.g. "54 min"
  releaseDate: string; // e.g. "12 de Setembro, 2026"
  year: string;
  badge: string; // e.g. "Série curta" | "Minissérie"
  coverVertical: string;
  backdropUrl: string;
  isFeatured?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  isShort?: boolean;
  tags: string[];
  episodes: CommunityEpisode[];
}

export const COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: 'o-eco-de-amanha',
    title: 'O Eco de Amanhã',
    slug: 'o-eco-de-amanha',
    tagline: 'Algumas vozes atravessam o tempo para avisar o que nunca deveria ter sido feito.',
    synopsis:
      'Em uma estação meteorológica desativada na Serra da Mantiqueira, a física Cecília sintoniza acidentalmente transmissões de áudio com 24 horas de antecedência ao tempo presente. Inicialmente encaradas como anomalias eletromagnéticas, as gravações logo trazem notícias de tragédias iminentes — e a voz de seu próprio irmão, desaparecido há sete anos, implorando para que ela não responda ao último chamado.',
    creator: {
      name: 'Helena Vasconcellos',
      handle: '@helenavasc',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Roteirista independente e apaixonada por ficção científica grounded e dramas existenciais.'
    },
    category: 'Ficção Científica',
    rating: 9.9,
    votesCount: 2340,
    totalEpisodes: 5,
    durationTotal: '58 min',
    releaseDate: '15 de Agosto, 2026',
    year: '2026',
    badge: 'Série curta',
    coverVertical: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85',
    backdropUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=85',
    isFeatured: true,
    isPopular: true,
    isNew: false,
    isShort: false,
    tags: ['Viagem no tempo', 'Mistério', 'Suspense', 'Drama Familiar'],
    episodes: [
      {
        number: 1,
        title: 'Frequência Residual',
        slug: 'ep-01-frequencia-residual',
        duration: '12 min',
        summary: 'Cecília capta um sussurro de rádio prevendo uma tempestade elétrica que ainda não ocorreu.',
        thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
        scenePreview: 'A estática preenche a cabine fria. O ponteiro do rádio oscila violentamente entre as frequências proibidas.'
      },
      {
        number: 2,
        title: 'Vozes Sem Rosto',
        slug: 'ep-02-vozes-sem-rosto',
        duration: '11 min',
        summary: 'A confirmação do primeiro evento faz Cecília descer ao vale em busca de uma testemunha.',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
        scenePreview: 'Na estrada de terra úmida, os faróis do jipe iluminam uma silhueta que desaparece no nevoeiro.'
      },
      {
        number: 3,
        title: 'O Paradoxo das 24 Horas',
        slug: 'ep-03-o-paradoxo',
        duration: '13 min',
        summary: 'Uma fita magnética encontrada no porão revela que as mensagens já vinham sendo catalogadas desde 1989.',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
        scenePreview: 'O carretel de fita gira lentamente. A voz no alto-falante é idêntica à de seu pai quando jovem.'
      },
      {
        number: 4,
        title: 'Sombra na Antena',
        slug: 'ep-04-sombra-na-antena',
        duration: '10 min',
        summary: 'Alguém corta os cabos da torre principal. Cecília percebe que não está sozinha no cume da montanha.',
        thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
        scenePreview: 'Passos pesados ecoam na escada de metal enferrujada do observatório.'
      },
      {
        number: 5,
        title: 'O Ponto de Origem',
        slug: 'ep-05-o-ponto-de-origem',
        duration: '12 min',
        summary: 'A decisão de enviar ou silenciar a transmissão final muda o destino de duas linhas temporais.',
        thumbnail: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80',
        scenePreview: 'O botão de transmissão pisca em vermelho. O relógio marca exatamente meia-noite.'
      }
    ]
  },
  {
    id: 'sombras-de-vidro',
    title: 'Sombras de Vidro',
    slug: 'sombras-de-vidro',
    tagline: 'Entre o reflexo e a verdade, existe um crime sem testemunhas.',
    synopsis:
      'Em um luxuoso edifício envidraçado no centro financeiro de São Paulo, uma restauradora de arte moderna nota anomalias nos espelhos do 38º andar durante o turno da madrugada. Figuras que não deveriam estar lá começam a reproduzir os últimos passos de um arquiteto desaparecido na noite da inauguração da torre.',
    creator: {
      name: 'Bruno Dellamare',
      handle: '@dellamare_cinema',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      bio: 'Diretor de fotografia e entusiasta de thrillers psicológicos de alta tensão.'
    },
    category: 'Suspense Psicológico',
    rating: 9.8,
    votesCount: 1890,
    totalEpisodes: 4,
    durationTotal: '44 min',
    releaseDate: '02 de Setembro, 2026',
    year: '2026',
    badge: 'Série curta',
    coverVertical: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800&q=85',
    backdropUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1600&q=85',
    isFeatured: true,
    isPopular: true,
    isNew: false,
    isShort: true,
    tags: ['Arquitetura', 'Mistério', 'Psicológico', 'Neo-Noir'],
    episodes: [
      {
        number: 1,
        title: 'O 38º Andar',
        slug: 'ep-01-o-38-andar',
        duration: '11 min',
        summary: 'Laura inicia o restauro de um tríptico de espelhos e descobre marcas de sangue polidas sob o verniz.',
        thumbnail: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 2,
        title: 'Reflexo Tardio',
        slug: 'ep-02-reflexo-tardio',
        duration: '10 min',
        summary: 'Os movimentos no vidro deixam de acompanhar os dela, com um atraso de exatos quatro segundos.',
        thumbnail: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 3,
        title: 'Plantas Escondidas',
        slug: 'ep-03-plantas-escondidas',
        duration: '12 min',
        summary: 'Um compartimento oco atrás da moldura revela cópias secretas de plantas de fuga do prédio.',
        thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 4,
        title: 'Quebra de Cristal',
        slug: 'ep-04-quebra-de-cristal',
        duration: '11 min',
        summary: 'O confronto final entre quem assiste e quem quer manter a verdade sepultada na cobertura.',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'cidade-sem-luz',
    title: 'Cidade Sem Luz',
    slug: 'cidade-sem-luz',
    tagline: 'Quando a última lâmpada apaga, os pecados mais profundos vêm à tona.',
    synopsis:
      'Um apagão histórico isola uma metrópole costeira por seis dias. No submundo dos becos escuros e dos cais abandonados, um ex-detetive e uma jornalista investigativa perseguem uma conspiração para privatizar o abastecimento de energia enquanto crimes antigos voltam a ser julgados longe dos tribunais.',
    creator: {
      name: 'Coletivo Neblina & Thiago Fontes',
      handle: '@coletivoneblina',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      bio: 'Grupo colaborativo de contadores de histórias focado em ficção urbana e drama policial.'
    },
    category: 'Thriller Noir',
    rating: 9.7,
    votesCount: 1530,
    totalEpisodes: 6,
    durationTotal: '68 min',
    releaseDate: '28 de Setembro, 2026',
    year: '2026',
    badge: 'Série curta',
    coverVertical: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85',
    backdropUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1600&q=85',
    isFeatured: true,
    isPopular: true,
    isNew: true,
    isShort: false,
    tags: ['Apagão', 'Investigação', 'Noir', 'Conspiração'],
    episodes: [
      {
        number: 1,
        title: 'Blecaute Total',
        slug: 'ep-01-blecaute-total',
        duration: '12 min',
        summary: 'As turbinas da usina silenciam repentinamente e a escuridão engole a cidade em segundos.',
        thumbnail: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 2,
        title: 'Luzes de Emergência',
        slug: 'ep-02-luzes-de-emergencia',
        duration: '11 min',
        summary: 'No porto velho, um contêiner lacrado com selos federais é violado sem testemunhas.',
        thumbnail: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 3,
        title: 'Linha Vermelha',
        slug: 'ep-03-linha-vermelha',
        duration: '11 min',
        summary: 'Mensagens clandestinas via rádio amador convocam uma assembleia dos sindicatos de eletricistas.',
        thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 4,
        title: 'A Lista dos 14',
        slug: 'ep-04-a-lista-dos-14',
        duration: '12 min',
        summary: 'Um pen drive encriptado revela nomes de parlamentares beneficiados pela crise energética.',
        thumbnail: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 5,
        title: 'Carga Máxima',
        slug: 'ep-05-carga-maxima',
        duration: '10 min',
        summary: 'Sabotadores tentam explodir a subestação principal para prorrogar o estado de sítio.',
        thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 6,
        title: 'Alvorada de Cinzas',
        slug: 'ep-06-alvorada-de-cinzas',
        duration: '12 min',
        summary: 'A luz finalmente retorna, iluminando tudo o que a cidade tentou esconder no escuro.',
        thumbnail: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'o-jardineiro-da-meia-noite',
    title: 'O Jardineiro da Meia-Noite',
    slug: 'o-jardineiro-da-meia-noite',
    tagline: 'Ele planta memórias que as pessoas preferem esquecer.',
    synopsis:
      'Em uma vila histórica do interior de Minas Gerais, existe um jardim fechado por muros de pedra onde só se entra com hora marcada após a meia-noite. O guardião do lugar cultiva espécies botânicas que florescem alimentadas por segredos confessados, devolvendo aos visitantes alívio temporário ao custo de pedaços de sua própria história.',
    creator: {
      name: 'Clara Mendonça',
      handle: '@claramendonca',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      bio: 'Autora de realismo fantástico e fábulas contemporâneas sobre memória e perdão.'
    },
    category: 'Fantasia Urbana',
    rating: 9.9,
    votesCount: 2110,
    totalEpisodes: 5,
    durationTotal: '52 min',
    releaseDate: '10 de Setembro, 2026',
    year: '2026',
    badge: 'Série curta',
    coverVertical: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85',
    backdropUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&q=85',
    isFeatured: true,
    isPopular: true,
    isNew: false,
    isShort: false,
    tags: ['Realismo Fantástico', 'Poesia', 'Segredos', 'Minas Gerais'],
    episodes: [
      {
        number: 1,
        title: 'A Semente da Culpa',
        slug: 'ep-01-a-semente-da-culpa',
        duration: '10 min',
        summary: 'A jovem médica Lorena busca o jardim para tentar apagar a lembrança de um erro cirúrgico.',
        thumbnail: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 2,
        title: 'Rosas de Vidro',
        slug: 'ep-02-rosas-de-vidro',
        duration: '11 min',
        summary: 'As pétalas azuis que brotam no canteiro central refletem o rosto de quem doou a memória.',
        thumbnail: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 3,
        title: 'O Preço da Amnésia',
        slug: 'ep-03-o-preco-da-amnesia',
        duration: '10 min',
        summary: 'Sem a dor do passado, Lorena começa a perder o vínculo com as pessoas que mais ama.',
        thumbnail: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 4,
        title: 'A Estufa Proibida',
        slug: 'ep-04-a-estufa-proibida',
        duration: '10 min',
        summary: 'Uma invasão noturna revela a verdadeira identidade do jardineiro centenário.',
        thumbnail: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 5,
        title: 'Colheita e Raízes',
        slug: 'ep-05-colheita-e-raizes',
        duration: '11 min',
        summary: 'Para salvar a própria identidade, Lorena precisa aceitar todas as suas cicatrizes de volta.',
        thumbnail: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'frequencia-404',
    title: 'Frequência 404',
    slug: 'frequencia-404',
    tagline: 'Uma transmissão pirata que sintoniza as mentes daqueles que estão sonhando.',
    synopsis:
      'Em uma Tóquio distópica onde o sono dos trabalhadores é monitorado por corporações farmacêuticas, um hacker de áudio descobre um canal clandestino de rádio que só pode ser ouvido por quem atinge a fase REM do sono. A cada madrugada, rebeldes compartilham memórias proibidas através de sintetizadores analógicos.',
    creator: {
      name: 'Maya Tanaka & Coletivo Subverso',
      handle: '@mayatanaka_lab',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      bio: 'Desenvolvedora de jogos sonoros e cineasta independente em ficção ciberpunk.'
    },
    category: 'Cyberpunk & Sci-Fi',
    rating: 9.8,
    votesCount: 1780,
    totalEpisodes: 5,
    durationTotal: '50 min',
    releaseDate: '22 de Setembro, 2026',
    year: '2026',
    badge: 'Série curta',
    coverVertical: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?auto=format&fit=crop&w=800&q=85',
    backdropUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=85',
    isFeatured: true,
    isPopular: false,
    isNew: true,
    isShort: false,
    tags: ['Cyberpunk', 'Ondas Cerebrais', 'Resistência', 'Synthwave'],
    episodes: [
      {
        number: 1,
        title: 'Estática no Sonho',
        slug: 'ep-01-estatica-no-sonho',
        duration: '10 min',
        summary: 'Kael conecta seu receptor caseiro ao sensor cerebral e ouve notas musicais impossíveis.',
        thumbnail: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 2,
        title: 'Protocolo Subliminar',
        slug: 'ep-02-protocolo-subliminar',
        duration: '10 min',
        summary: 'As corporações detectam os picos de dopamina nas cobaias e iniciam buscas em Shinjuku.',
        thumbnail: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 3,
        title: 'Vetor de Contágio',
        slug: 'ep-03-vetor-de-contagio',
        duration: '10 min',
        summary: 'Mais de dez mil pessoas acordam com a mesma canção na cabeça e começam a desobedecer ordens.',
        thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 4,
        title: 'A Torre Transmissora',
        slug: 'ep-04-a-torre-transmissora',
        duration: '10 min',
        summary: 'Invasão vertical ao topo do arranha-céu onde fica o satélite que bloqueia as mentes.',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 5,
        title: 'Despertar Coletivo',
        slug: 'ep-05-despertar-coletivo',
        duration: '10 min',
        summary: 'A frequência 404 é liberada em rede aberta mundial, acabando com a era do sono controlado.',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'circulo-das-mares',
    title: 'Círculo das Marés',
    slug: 'circulo-das-mares',
    tagline: 'O mar devolve tudo o que foi jogado em suas águas. Menos a inocência.',
    synopsis:
      'Em uma colônia de pescadores isolada pela maré alta, o aparecimento de um sino de bronze gravado com nomes de náufragos de 1912 reabre uma disputa de sangue entre duas famílias tradicionais que juraram nunca revelar o que aconteceu na noite da grande ressaca.',
    creator: {
      name: 'Lucas Arantes',
      handle: '@arantes_costa',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      bio: 'Documentarista litorâneo e contador de causos da costa brasileira.'
    },
    category: 'Mistério Costeiro',
    rating: 9.6,
    votesCount: 1240,
    totalEpisodes: 4,
    durationTotal: '46 min',
    releaseDate: '19 de Setembro, 2026',
    year: '2026',
    badge: 'Série curta',
    coverVertical: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85',
    backdropUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1600&q=85',
    isFeatured: false,
    isPopular: true,
    isNew: false,
    isShort: true,
    tags: ['Litoral', 'Drama Familiar', 'Tradição', 'Segredos'],
    episodes: [
      {
        number: 1,
        title: 'O Bronze na Areia',
        slug: 'ep-01-o-bronze-na-areia',
        duration: '11 min',
        summary: 'A maré vaza e expõe o topo do sino incrustado de corais na praia dos Naufragados.',
        thumbnail: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 2,
        title: 'O Nome Raspado',
        slug: 'ep-02-o-nome-raspado',
        duration: '12 min',
        summary: 'Uma inscrição no sino foi propositalmente destruída a formão há mais de um século.',
        thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 3,
        title: 'Maré Viva',
        slug: 'ep-03-mare-viva',
        duration: '11 min',
        summary: 'A água sobe além do normal e invade a capela antiga onde os diários do padre foram guardados.',
        thumbnail: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 4,
        title: 'O Último Mergulho',
        slug: 'ep-04-o-ultimo-mergulho',
        duration: '12 min',
        summary: 'As duas famílias confrontam o patriarca à beira do precipício antes da maré cobrir o banco de areia.',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'ultimo-trem-para-san-juan',
    title: 'Último Trem Para San Juan',
    slug: 'ultimo-trem-para-san-juan',
    tagline: 'Sete passageiros. Uma única bala. Ninguém desce antes do amanhecer.',
    synopsis:
      'Num comboio ferroviário que atravessa o planalto semiárido na fronteira, sete desconhecidos percebem que a locomotiva foi sabotada e não fará paradas. Entre eles há um juiz corrupto, um ladrão arrependido e alguém buscando vingança por um envenenamento ocorrido há vinte anos.',
    creator: {
      name: 'Diogo Silveira',
      handle: '@diogosilveira_scripts',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      bio: 'Roteirista de narrativas fechadas em espaço único e diálogos cortantes.'
    },
    category: 'Thriller & Vingança',
    rating: 9.7,
    votesCount: 1390,
    totalEpisodes: 4,
    durationTotal: '42 min',
    releaseDate: '01 de Outubro, 2026',
    year: '2026',
    badge: 'Série curta',
    coverVertical: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=800&q=85',
    backdropUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=85',
    isFeatured: false,
    isPopular: false,
    isNew: true,
    isShort: true,
    tags: ['Trem', 'Suspense Fechado', 'Vingança', 'Diálogos'],
    episodes: [
      {
        number: 1,
        title: 'Bilhete Sem Volta',
        slug: 'ep-01-bilhete-sem-volta',
        duration: '10 min',
        summary: 'As portas dos vagões são trancadas por fora enquanto o maquinista desaparece na cabine.',
        thumbnail: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 2,
        title: 'O Jogo das Cadeiras',
        slug: 'ep-02-o-jogo-das-cadeiras',
        duration: '10 min',
        summary: 'Uma caixa de cartas anônimas é aberta no vagão-restaurante, revelando os crimes de cada um.',
        thumbnail: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 3,
        title: 'Curva da Ferradura',
        slug: 'ep-03-curva-da-ferradura',
        duration: '11 min',
        summary: 'A velocidade do comboio aumenta perigosamente ao se aproximar da ponte sobre o cânion.',
        thumbnail: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 4,
        title: 'Estação Fantasma',
        slug: 'ep-04-estacao-fantasma',
        duration: '11 min',
        summary: 'Os freios de emergência só podem ser acionados por alguém disposto a confessar em voz alta.',
        thumbnail: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 'as-cores-do-silencio',
    title: 'As Cores do Silêncio',
    slug: 'as-cores-do-silencio',
    tagline: 'Na galeria abandonada, cada tela revela o paradeiro de quem desapareceu.',
    synopsis:
      'Uma perita em pigmentos raros é contratada para autenticar uma coleção de quadros expressionistas encontrados no sótão de um sanatório desativado. Ao analisar as camadas químicas da tinta vermelha, ela descobre que o artista usava elementos biológicos das próprias pessoas que retratava antes de sumirem sem deixar rastro.',
    creator: {
      name: 'Sofia Drummond',
      handle: '@drummond_art',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      bio: 'Artes visuais e dramaturgia com foco em estética gótica contemporânea.'
    },
    category: 'Drama Lírico & Mistério',
    rating: 9.8,
    votesCount: 1620,
    totalEpisodes: 5,
    durationTotal: '55 min',
    releaseDate: '04 de Outubro, 2026',
    year: '2026',
    badge: 'Série curta',
    coverVertical: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85',
    backdropUrl: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1600&q=85',
    isFeatured: false,
    isPopular: false,
    isNew: true,
    isShort: false,
    tags: ['Arte', 'Investigação Química', 'Gótico', 'Segredos'],
    episodes: [
      {
        number: 1,
        title: 'Pigmento Carmesim',
        slug: 'ep-01-pigmento-carmesim',
        duration: '11 min',
        summary: 'A análise espectrométrica da primeira tela aponta um composto orgânico com DNA humano.',
        thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 2,
        title: 'O Retrato Sem Olhos',
        slug: 'ep-02-o-retrato-sem-olhos',
        duration: '11 min',
        summary: 'Sob luz ultravioleta, uma segunda pintura oculta traz a data exata da morte de uma herdeira.',
        thumbnail: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 3,
        title: 'O Ateliê de Vidro',
        slug: 'ep-03-o-atelie-de-vidro',
        duration: '11 min',
        summary: 'A busca pelo caderno de fórmulas do pintor leva a uma cripta sob o jardim de inverno.',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 4,
        title: 'A Última Modelo',
        slug: 'ep-04-a-ultima-modelo',
        duration: '11 min',
        summary: 'Sofia descobre que sua própria mãe foi uma das modelos retratadas na fase final da carreira do artista.',
        thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80'
      },
      {
        number: 5,
        title: 'Verniz Eterno',
        slug: 'ep-05-verniz-eterno',
        duration: '11 min',
        summary: 'A revelação do mural inacabado soluciona o desaparecimento de cinco famílias ilustres.',
        thumbnail: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

export function getCommunityStoryBySlug(slug: string): CommunityStory | undefined {
  return COMMUNITY_STORIES.find((s) => s.slug === slug);
}

export function getFeaturedCommunityStories(): CommunityStory[] {
  return COMMUNITY_STORIES.filter((s) => s.isFeatured);
}

export function getPopularCommunityStories(): CommunityStory[] {
  return COMMUNITY_STORIES.filter((s) => s.isPopular || s.rating >= 9.8);
}

export function getNewCommunityStories(): CommunityStory[] {
  return COMMUNITY_STORIES.filter((s) => s.isNew);
}

export function getShortCommunityStories(): CommunityStory[] {
  return COMMUNITY_STORIES.filter((s) => s.isShort || s.totalEpisodes <= 4);
}

export function getRelatedCommunityStories(currentSlug: string): CommunityStory[] {
  return COMMUNITY_STORIES.filter((s) => s.slug !== currentSlug).slice(0, 4);
}
