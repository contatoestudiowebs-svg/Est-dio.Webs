export interface CommunityEpisode {
  number: number;
  title: string;
  slug: string;
  duration: string;
  summary: string;
  thumbnail: string;
  scenePreview?: string;
}

export type CommunityStoryStatus = 'Disponível' | 'Estreia em breve';

export interface CommunityStory {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  synopsis: string;
  status: CommunityStoryStatus;
  creator: {
    name: string;
    handle: string;
    avatar: string;
    bio: string;
  };
  category: string;
  totalEpisodes: number;
  durationTotal: string;
  releaseDate: string;
  year: string;
  badge: string;
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
    id: 'o-grao-de-mostarda',
    title: 'O Grão de Mostarda',
    slug: 'o-grao-de-mostarda',
    tagline: 'Uma tocante jornada sobre luto, dor e a descoberta de que ninguém sofre sozinho.',
    synopsis:
      'Lara nasceu e foi criada numa pequena casa abaixo de uma vila, somente ela e sua mãe, Dona Cecília. Uma fazia companhia à outra. Até que, um dia, Dona Cecília veio a falecer, e Lara não aceitava perder a mãe. Com esperança de trazê-la de volta, Lara decide ir até o Velho Sábio, que instrui Lara a subir até a vila, bater de porta em porta e, onde não houvesse uma família que tivesse perdido alguém para a morte, ali ela pegasse um grão de mostarda. Ao fazer isso, Lara percebe que a dor que sente não é algo individual, mas que todos já experimentaram essa mesma dor.',
    status: 'Disponível',
    creator: {
      name: 'Fred Reids',
      handle: '@fredreids',
      avatar: 'https://static.wixstatic.com/media/cbfc82_82f27329310c403c8e6c29e4d3285e23~mv2.png/v1/fill/w_150,h_150,al_c,q_85,enc_avif,quality_auto/cbfc82_82f27329310c403c8e6c29e4d3285e23~mv2.png',
      bio: 'Autor, dramaturgo e criador de histórias intensas que exploram o drama humano e as emoções mais profundas da alma.'
    },
    category: 'Drama',
    totalEpisodes: 4,
    durationTotal: '44 min',
    releaseDate: 'Disponível Oficialmente',
    year: '2026',
    badge: '04 episódios',
    coverVertical:
      'https://static.wixstatic.com/media/cbfc82_cf60d466dfb441f3b8f0f45925108c87~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-O-Gr%C3%A3o-de-Mostarda.png',
    backdropUrl:
      'https://static.wixstatic.com/media/cbfc82_cf60d466dfb441f3b8f0f45925108c87~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-O-Gr%C3%A3o-de-Mostarda.png',
    isFeatured: true,
    isPopular: true,
    isNew: true,
    isShort: true,
    tags: ['Drama', 'Reflexão', 'Superação', 'Família'],
    episodes: [
      {
        number: 1,
        title: 'O Vazio na Casa de Baixo',
        slug: 'episodio-01',
        duration: '11 min',
        summary:
          'Lara acorda diante da ausência de Dona Cecília. A pequena casa, antes repleta de cumplicidade, torna-se um labirinto de lembranças e dor inconsolável.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_cf60d466dfb441f3b8f0f45925108c87~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-O-Gr%C3%A3o-de-Mostarda.png',
        scenePreview:
          'O vento frio balança as cortinas da janela onde Dona Cecília costumava costurar. Lara segura um lenço de sua mãe contra o peito, chorando em silêncio.'
      },
      {
        number: 2,
        title: 'O Encontro com o Velho Sábio',
        slug: 'episodio-02',
        duration: '10 min',
        summary:
          'Movida pelo desespero e pela fé em um milagre, Lara sobe a colina em direção à cabana do sábio, recebendo uma missão misteriosa para reviver sua mãe.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_cf60d466dfb441f3b8f0f45925108c87~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-O-Gr%C3%A3o-de-Mostarda.png',
        scenePreview:
          'O Velho Sábio olha nos olhos de Lara com ternura e compaixão: "Traga-me um único grão de mostarda de um lar onde a morte nunca tenha entrado, e sua mãe voltará."'
      },
      {
        number: 3,
        title: 'De Porta em Porta',
        slug: 'episodio-03',
        duration: '12 min',
        summary:
          'Lara percorre as vielas da vila, batendo nas portas com esperança, apenas para ouvir os relatos mais comoventes de luto de cada família que a acolhe.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_cf60d466dfb441f3b8f0f45925108c87~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-O-Gr%C3%A3o-de-Mostarda.png',
        scenePreview:
          'Uma mãe idosa abre a porta em prantos e abraça Lara: "Gostaria tanto de te dar esse grão, minha jovem... mas perdi meu único filho no inverno passado."'
      },
      {
        number: 4,
        title: 'O Grão da Compreensão',
        slug: 'episodio-04',
        duration: '11 min',
        summary:
          'De mãos vazias, mas com a alma apaziguada, Lara retorna ao sábio. Ao compreender que a dor une toda a humanidade, ela finalmente encontra forças para se despedir.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_cf60d466dfb441f3b8f0f45925108c87~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-O-Gr%C3%A3o-de-Mostarda.png',
        scenePreview:
          'Lara abre as mãos vazias diante do sábio com lágrimas serenas: "Não encontrei nenhuma casa intocada pela morte. Mas encontrei corações que entendem minha dor."'
      }
    ]
  },
  {
    id: 'coliseu',
    title: 'COLISEU',
    slug: 'coliseu',
    tagline: 'Ambição, conspiração e sangue sob as ordens da imperatriz de Roma.',
    synopsis:
      'Greta é esposa do rei romano César e interfere nas decisões do império. A construção do Coliseu foi um desejo seu. Ao descobrir que César a trai com sua irmã Mineria e pretende colocar o filho dela como sucessor, Greta arma a morte do rei e faz a culpa cair sobre o sobrinho, que é morto na inauguração do Coliseu. Nesse mesmo dia, seu filho com César assume o trono. Jeremias, um judeu, se recusa a se curvar diante do novo rei e é preso por ordem de Greta. No cárcere, ele converte outras pessoas a seguirem a Deus, deixando Greta furiosa. Ela pede ao filho que lance Jeremias aos leões, e ele obedece. Porém, depois, o filho descobre diante de todos que Greta matou seu pai. Ele então a lança aos leões e redime Mineria pela injustiça cometida.',
    status: 'Estreia em breve',
    creator: {
      name: 'Fred Reids',
      handle: '@fredreids',
      avatar: 'https://static.wixstatic.com/media/cbfc82_82f27329310c403c8e6c29e4d3285e23~mv2.png/v1/fill/w_150,h_150,al_c,q_85,enc_avif,quality_auto/cbfc82_82f27329310c403c8e6c29e4d3285e23~mv2.png',
      bio: 'Autor, dramaturgo e criador de histórias intensas que exploram o drama humano e as grandes conspirações de poder.'
    },
    category: 'Épico Histórico',
    totalEpisodes: 4,
    durationTotal: '52 min',
    releaseDate: 'Estreia em Breve',
    year: '2026',
    badge: '04 episódios',
    coverVertical:
      'https://static.wixstatic.com/media/cbfc82_3e564c6d6a2843babd74d6d7b69f39ad~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Coliseu.png',
    backdropUrl:
      'https://static.wixstatic.com/media/cbfc82_3e564c6d6a2843babd74d6d7b69f39ad~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Coliseu.png',
    isFeatured: true,
    isPopular: true,
    isNew: true,
    isShort: true,
    tags: ['Épico', 'Roma Antiga', 'Traição', 'Coliseu', 'Poder'],
    episodes: [
      {
        number: 1,
        title: 'O Desejo de Greta',
        slug: 'episodio-01',
        duration: '13 min',
        summary:
          'Enquanto a imponente arena de pedra ergue-se sobre Roma, Greta descobre a traição íntima entre César e Mineria e orquestra friamente o envenenamento do imperador.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_3e564c6d6a2843babd74d6d7b69f39ad~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Coliseu.png',
        scenePreview:
          'Nas sombras do palácio de mármore, Greta despeja a gota do veneno na taça dourada de César: "Roma pertence àqueles que não temem o sangue."'
      },
      {
        number: 2,
        title: 'Sangue na Inauguração',
        slug: 'episodio-02',
        duration: '14 min',
        summary:
          'Os clarins ecoam na inauguração do Coliseu. O sobrinho inocente é executado na arena sob falsa acusação, e o filho de Greta assume a coroa imperial.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_3e564c6d6a2843babd74d6d7b69f39ad~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Coliseu.png',
        scenePreview:
          'A multidão ruge quando o filho de César é coroado. Greta sorri do camarote real vendo seu plano perfeito triunfar diante de toda Roma.'
      },
      {
        number: 3,
        title: 'A Fé no Cárcere',
        slug: 'episodio-03',
        duration: '12 min',
        summary:
          'Jeremias recusa-se a adorar o novo soberano. Das masmorras escuras do Coliseu, suas pregações convertem prisioneiros e guardas, despertando a fúria da imperatriz.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_3e564c6d6a2843babd74d6d7b69f39ad~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Coliseu.png',
        scenePreview:
          'Greta desce às masmorras com tochas acesas: "Curva-te diante do meu filho, judeu!" Jeremias responde em paz: "Só há um Rei a quem dobro meus joelhos."'
      },
      {
        number: 4,
        title: 'A Sentença dos Leões',
        slug: 'episodio-04',
        duration: '13 min',
        summary:
          'Jeremias é levado à arena, mas uma testemunha inesperada expõe os crimes de Greta. Em choque, o jovem imperador decreta o destino final de sua própria mãe.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_3e564c6d6a2843babd74d6d7b69f39ad~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Coliseu.png',
        scenePreview:
          'Os portões de ferro se abrem e o rugido dos leões ecoa. O imperador estende a mão para Mineria, enquanto Greta é cercada nas areias que ela mesma mandou construir.'
      }
    ]
  },
  {
    id: 'quao-forte-e-o-seu-coracao',
    title: 'Quão Forte é o Seu Coração',
    slug: 'quao-forte-e-o-seu-coracao',
    tagline: 'Algumas batalhas não são vencidas pela força, mas pela coragem de olhar para dentro de si mesmo.',
    synopsis:
      'Em um reino marcado por magia, perdas e uma antiga disputa pelo poder, Eamon se vê diante de uma batalha que parece ter como alvo a misteriosa rainha Isolde. Movido pela esperança de libertar o reino de Naria, ele decide enfrentar forças que vão muito além do que consegue compreender.\n\nÀ medida que sua jornada avança, Eamon começa a descobrir que por trás dos conflitos existe uma história de amor, dor, arrependimentos e escolhas capazes de mudar o destino de todo um reino. Para encontrar a verdadeira paz, ele precisará enfrentar seus maiores medos e descobrir que algumas batalhas não são vencidas pela força, mas pela coragem de olhar para dentro de si mesmo.',
    status: 'Estreia em breve',
    creator: {
      name: 'Fred Reids',
      handle: '@fredreids',
      avatar: 'https://static.wixstatic.com/media/cbfc82_82f27329310c403c8e6c29e4d3285e23~mv2.png/v1/fill/w_150,h_150,al_c,q_85,enc_avif,quality_auto/cbfc82_82f27329310c403c8e6c29e4d3285e23~mv2.png',
      bio: 'Autor, dramaturgo e criador de narrativas que combinam épicos medievais, fantasia lírica e dilemas existenciais.'
    },
    category: 'Fantasia',
    totalEpisodes: 4,
    durationTotal: '48 min',
    releaseDate: 'Estreia em Breve',
    year: '2026',
    badge: '04 episódios',
    coverVertical:
      'https://static.wixstatic.com/media/cbfc82_c79b8f94d7714c07b0e382ceb2ce68e0~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Qu%C3%A3o-Forte-%C3%A9-o-Seu-Cora%C3%A7%C3%A3o.png',
    backdropUrl:
      'https://static.wixstatic.com/media/cbfc82_c79b8f94d7714c07b0e382ceb2ce68e0~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Qu%C3%A3o-Forte-%C3%A9-o-Seu-Cora%C3%A7%C3%A3o.png',
    isFeatured: true,
    isPopular: true,
    isNew: true,
    isShort: true,
    tags: ['Fantasia', 'Aventura', 'Magia', 'Reino de Naria', 'Redenção'],
    episodes: [
      {
        number: 1,
        title: 'As Sombras de Naria',
        slug: 'episodio-01',
        duration: '12 min',
        summary:
          'Eamon presencia a decadência de Naria e aceita a perigosa missão de marchar contra a fortaleza da enigmática rainha Isolde.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_c79b8f94d7714c07b0e382ceb2ce68e0~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Qu%C3%A3o-Forte-%C3%A9-o-Seu-Cora%C3%A7%C3%A3o.png',
        scenePreview:
          'O céu sobre as montanhas de Naria escurece em tons púrpuras. Eamon desembainha sua lâmina ancestral, jurando libertar seu povo.'
      },
      {
        number: 2,
        title: 'O Enigma da Rainha Isolde',
        slug: 'episodio-02',
        duration: '11 min',
        summary:
          'Ao invadir a sala do trono, Eamon não encontra uma tirana cruel, mas uma soberana aprisionada por uma maldição nascida de um coração despedaçado.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_c79b8f94d7714c07b0e382ceb2ce68e0~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Qu%C3%A3o-Forte-%C3%A9-o-Seu-Cora%C3%A7%C3%A3o.png',
        scenePreview:
          'Isolde olha para a espada de Eamon com olhos marejados de dor: "Você veio me matar pela dor que não causei, guerreiro?"'
      },
      {
        number: 3,
        title: 'Segredos e Arrependimentos',
        slug: 'episodio-03',
        duration: '13 min',
        summary:
          'Unidos contra os verdadeiros conspiradores do reino, Eamon e Isolde desvendam o elo esquecido que os conectava desde a juventude.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_c79b8f94d7714c07b0e382ceb2ce68e0~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Qu%C3%A3o-Forte-%C3%A9-o-Seu-Cora%C3%A7%C3%A3o.png',
        scenePreview:
          'Antigos pergaminhos iluminados por velas revelam o sacrifício que Isolde fez para que a linhagem de Eamon continuasse a salvo.'
      },
      {
        number: 4,
        title: 'A Batalha do Coração',
        slug: 'episodio-04',
        duration: '12 min',
        summary:
          'No cume do templo antigo, a escuridão exige um sacrifício. Eamon aprende que a coragem de perdoar é a única força capaz de romper o encanto de Naria.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_c79b8f94d7714c07b0e382ceb2ce68e0~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Qu%C3%A3o-Forte-%C3%A9-o-Seu-Cora%C3%A7%C3%A3o.png',
        scenePreview:
          'A espada repousa no chão de pedra. Eamon segura a mão de Isolde enquanto a luz dourada dissolve as sombras eternas de Naria.'
      }
    ]
  },
  {
    id: 'eu-sou-piaf',
    title: 'Eu Sou Piaf',
    slug: 'eu-sou-piaf',
    tagline: 'Entre pratos sujos e o brilho dos palcos, a voz que desafiou o preconceito.',
    synopsis:
      'Marcelo é um jovem sonhador. Cresceu vendo sua mãe ouvir Edith Piaf e acabou se tornando um grande fã da cantora. E hoje ele divide seu tempo entre trabalho, como lavador de pratos, e pequenas apresentações nas noites, onde interpreta as músicas de Edith Piaf. Seus pais descobrem o que ele faz nas noites e expulsam Marcelo de casa. Marcelo vê uma oportunidade de mudar de vida e viver seu sonho quando abrem inscrições para uma seleção de talentos para um grande teatro da cidade. Marcelo é inscrito por sua amiga. No dia de sua apresentação, Marcelo dá um show como Edith Piaf, todos se encantam com a incrível apresentação.',
    status: 'Estreia em breve',
    creator: {
      name: 'Fred Reids',
      handle: '@fredreids',
      avatar:
        'https://static.wixstatic.com/media/cbfc82_82f27329310c403c8e6c29e4d3285e23~mv2.png/v1/fill/w_150,h_150,al_c,q_85,enc_avif,quality_auto/cbfc82_82f27329310c403c8e6c29e4d3285e23~mv2.png',
      bio: 'Autor, dramaturgo e criador de histórias intensas que exploram a arte, superação e as emoções humanas.'
    },
    category: 'Drama',
    totalEpisodes: 4,
    durationTotal: '45 min',
    releaseDate: 'Estreia em Breve',
    year: '2026',
    badge: '04 episódios',
    coverVertical:
      'https://static.wixstatic.com/media/cbfc82_7ce7c95583a142f78b63ea23b26e9051~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Eu-Sou-Piaf.png',
    backdropUrl:
      'https://static.wixstatic.com/media/cbfc82_7ce7c95583a142f78b63ea23b26e9051~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Eu-Sou-Piaf.png',
    isFeatured: true,
    isPopular: true,
    isNew: true,
    isShort: true,
    tags: ['Drama', 'Música', 'Superação', 'Edith Piaf', 'Teatro'],
    episodes: [
      {
        number: 1,
        title: 'A Voz na Madrugada',
        slug: 'episodio-01',
        duration: '11 min',
        summary:
          'Marcelo enfrenta a rotina exaustiva na cozinha do restaurante, guardando para as noites secretas a paixão de cantar as canções de Edith Piaf.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_7ce7c95583a142f78b63ea23b26e9051~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Eu-Sou-Piaf.png',
        scenePreview:
          'Sob a luz fraca de um pequeno bar, Marcelo coloca o vestido preto e fecha os olhos. As primeiras notas de "La Vie en Rose" silenciam todo o ambiente.'
      },
      {
        number: 2,
        title: 'Portas Fechadas',
        slug: 'episodio-02',
        duration: '11 min',
        summary:
          'O segredo de Marcelo é descoberto por seus pais. Rejeitado e expulso de casa sem nada além de seus discos e sonhos, ele encontra abrigo na amizade.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_7ce7c95583a142f78b63ea23b26e9051~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Eu-Sou-Piaf.png',
        scenePreview:
          'A porta bate com força na noite chuvosa. Marcelo senta na calçada com sua mala humilde e aperta o vinil de Edith Piaf contra o peito.'
      },
      {
        number: 3,
        title: 'A Inscrição Inesperada',
        slug: 'episodio-03',
        duration: '12 min',
        summary:
          'A seleção de novos talentos para o Teatro Municipal abre inscrições. Sem que Marcelo saiba, sua melhor amiga envia seu nome para os jurados.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_7ce7c95583a142f78b63ea23b26e9051~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Eu-Sou-Piaf.png',
        scenePreview:
          'A amiga entrega o envelope dourado da confirmação: "Eles precisam ouvir você, Marcelo. O mundo inteiro precisa saber quem você é."'
      },
      {
        number: 4,
        title: 'Sob os Holofotes',
        slug: 'episodio-04',
        duration: '11 min',
        summary:
          'Diante do teatro lotado e dos jurados mais rigorosos, Marcelo sobe ao palco. Sua interpretação arrebatadora como Edith Piaf conquista aplausos de pé e consagra seu talento.',
        thumbnail:
          'https://static.wixstatic.com/media/cbfc82_7ce7c95583a142f78b63ea23b26e9051~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cat%C3%A1logo-comunidade-est%C3%BAdio-Eu-Sou-Piaf.png',
        scenePreview:
          'O refletor ilumina Marcelo cantando "Non, je ne regrette rien". A plateia se levanta em lágrimas com uma ovação histórica no grande teatro.'
      }
    ]
  }
];

export function getFeaturedCommunityStories(): CommunityStory[] {
  return COMMUNITY_STORIES;
}

export function getNewCommunityStories(): CommunityStory[] {
  return COMMUNITY_STORIES;
}

export function getCommunityStoryBySlug(slug: string): CommunityStory | undefined {
  return COMMUNITY_STORIES.find((s) => s.slug === slug);
}

export function getRelatedCommunityStories(currentSlug: string): CommunityStory[] {
  return COMMUNITY_STORIES.filter((s) => s.slug !== currentSlug);
}
