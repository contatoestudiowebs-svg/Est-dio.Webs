import { ChapterEpisode } from '../types';

export interface SenaEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const SENA_EPISODES_RAW: SenaEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — O Fim?',
    summary:
      'Jair vai à casa de Rômulo e o faz refém junto com sua esposa. Jair faz uma proposta para os dois, que recusam. Denise desce e vê os pais de joelhos. Rômulo vai pra cima dos policiais e acaba sendo morto ele e Eulália, por Dominic. ANOS DEPOIS... Jair é morto por Sena.',
    pages: [
      `SENA\nEPISÓDIO 01\n“O FIM?”\nDe Liz Santos`,
      `CONDOMÍNIO – CASA DE RÔMULO – NOITE.\nRômulo e Eulália são feitos reféns pelo delegado Jair Medeiros e seus homens armados na sala de estar. Jair exige que Rômulo aceite trabalhar para o Senador na rota do narcotráfico.`,
      `CONDOMÍNIO – QUARTO E SALA.\nA pequena Denise desce a escada assustada e vê os pais rendidos. No impulso para proteger a filha, Rômulo investe contra Dominic, que dispara e mata Rômulo e Eulália no chão. Jair entrega a órfã Denise para a tia-avó Mabel.`,
      `CASA DE JAIR – NOITE (ANOS DEPOIS).\nAposentado da polícia aos 59 anos, Jair é surpreendido em seu quarto por uma figura mascarada de preto com o número 6 no peito. É Sena, que cobra as mortes do passado e executa Jair à queima-roupa com tiros de silenciador.`
    ],
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — Duque de Às',
    summary:
      'Helena vai a casa de Jair e descobre uma peça de dominó na cena do crime. Em pronunciamento Helena fala sobre a morte de Jair. Helena apresenta Clarisse e sua equipe. Dominic questiona Helena. Clarisse passa informações sobre Sena para Helena. Helena recebe uma ligação misteriosa. Clarisse e sua equipe prendem Duque.',
    pages: [
      `SENA\nEPISÓDIO 02\n“DUQUE DE ÀS”\nDe Liz Santos`,
      `CASA DE JAIR – QUARTO – MANHÃ.\nA corregedora Helena e os peritos recolhem uma peça de dominó — a bucha de sena — no bolso do cadáver de Jair, confirmando a assinatura da facção.`,
      `DELEGACIA DE INVESTIGAÇÃO – DIA.\nHelena apresenta a investigadora Clarisse, Hélio e José vindos de São Paulo para liderar a força-tarefa contra a quadrilha do dominó, rebaixando Silvano e afastando Dominic do comando.`,
      `CASA DE DUQUE – MADRUGADA.\nApós uma ligação misteriosa com aviso cifrado de Sena a Helena, Clarisse e sua equipe montam um cerco relâmpago e prendem Duque com as mãos na cabeça.`
    ],
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — Duque',
    summary:
      'Clarisse interroga Duque, mas ele fala pouco e não dá muita informação. Silvano descobre que Helena esconde sobre a peça de dominó achada no corpo de Jair. Ele ameaça contar à imprensa. Clarisse conta a Dominic que Duque não quis colaborar. Helena lembra do acordo que fez com Sena. Sena liga para Helena e pede que ela dê um jeito de entregar um celular para Duque. Hélio e José recebem informações sobre Às. Dominic pede para ter acesso ao documento e descobre que é o endereço de sua irmã. Helena entrega o celular a Duque. Sena liga para Duque.',
    pages: [
      `SENA\nEPISÓDIO 03\n“DUQUE”\nDe Liz Santos`,
      `DELEGACIA – SALA DE INTERROGATÓRIO – MANHÃ.\nClarisse interroga Adailton (Duque), que debocha das perguntas e avisa que a maior peça do jogo é a Bucha de Sena.`,
      `ADMINISTRATIVO E SALA DA DELEGADA.\nSilvano descobre a foto do dominó nos arquivos ocultados e chantageia Helena exigindo seu antigo cargo com aumento. Sena liga para Helena ordenando que entregue um celular clandestino na cela de Duque.`,
      `MESA DE HÉLIO E CELA DA DELEGACIA.\nHélio recebe denúncia anônima com o paradeiro do parceiro Às, e Dominic descobre em choque que é a casa de sua própria irmã. Na cela, Helena entrega o celular a Duque e Sena liga para ele.`
    ],
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — Aviso',
    summary:
      'Sena conta a Duque porque entregou ele para a polícia, ele ameaça contar tudo, e Sena diz que foi para protegê-lo. Helena parabeniza Clarisse pela prisão. Dominic vai até a casa de sua irmã Madalena. Sena liga para Helena e conta da denúncia sobre Às. Sena fala que Às é casado com a irmã de Dominic. Helena conta das ameaças de Silvano. Dominic conta que é cunhado de Às. Às liga para Madalena e sua ligação é rastreada.',
    pages: [
      `SENA\nEPISÓDIO 04\n“AVISO”\nDe Liz Santos`,
      `DELEGACIA – CELA – MANHÃ.\nSena explica a Duque pelo telefone que a prisão foi para protegê-lo de uma rebelião interna na quadrilha e que em breve o tirará pela porta da frente.`,
      `CASA DE MADALENA – TARDE.\nDominic vai até a casa de Madalena e confronta a irmã ao constatar que seu cunhado Tadeu é o criminoso Às. Ela o expulsa de casa em prantos.`,
      `DELEGACIA E QUARTO SECRETO – NOITE.\nSena arma o rastreamento com Helena. Tadeu liga para Madalena de um esconderijo; a equipe de TI da polícia intercepta o sinal e localiza a posição exata de Às.`
    ],
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — Às',
    summary:
      'Clarisse organiza a equipe para ir prender Às. Silvano segue Hélio e descobre onde ele mora e que é casado com outro homem. Sena liga para Helena e exige uma sela especial para Duque. Alguém mexe no carro de Silvano. Ás é preso. Ao chegar em casa Silvano vê uma pessoa de perto que começa a atirar nele. A pessoa aproxima-se, tira Silvano do carro e atira.',
    pages: [
      `SENA\nEPISÓDIO 05\n“ÀS”\nDe Liz Santos`,
      `CASA DE HÉLIO E DELEGACIA – NOITE.\nSilvano segue Hélio até sua casa e descobre que ele é casado com Dom. Na rua da delegacia, um homem encapuzado arromba o carro de Silvano e rouba sua arma de fogo.`,
      `CONDOMÍNIO DE CASAS – NOITE.\nTadeu (Às) sai do bunker secreto para ir ao encontro marcado por Sena e cai direto na emboscada armada por Clarisse e seus policiais, sendo algemado e preso.`,
      `CASA DE SILVANO – NOITE.\nAo chegar em casa, Silvano é encurralado por uma figura de preto com máscara de olhos em LED. Sem sua arma no porta-luvas, Silvano é arrastado para fora do carro e alvejado.`
    ],
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — O Jogo Vai Começar!',
    summary:
      'Sena liga para Helena e diz que deu um jeito em Silvano. Helena pede para ver o rosto de Sena e é ameaçada. Sena conta porque matou Jair. Dominic e Clarisse interrogam Tadeu/Às. Silvano aparece na delegacia atrás de Helena e conta o que aconteceu. Sena liga para Madalena e faz uma proposta pra ela. Silvano descobre que o sobrinho de Hélio trafica drogas. Dominic vai visitar sua filha. Madalena liga para Sena e aceita a proposta.',
    pages: [
      `SENA\nEPISÓDIO 06\n“O JOGO VAI COMEÇAR!”\nDe Liz Santos`,
      `DELEGACIA – SALA DE HELENA – DIA.\nSena avisa Helena que deu um susto definitivo em Silvano e detalha a vingança contra o falecido Jair. Helena tenta exigir ver o rosto do líder e é ameaçada de morte.`,
      `SALA DE INTERROGATÓRIO E CORREGEDORIA.\nClarisse e Dominic pressionam Tadeu/Às. Silvano sobrevive aos disparos de aviso e invade a sala de Helena aterrorizado. Paralelamente, descobre podres sobre o sobrinho de Hélio.`,
      `CASA DE MADALENA – NOITE.\nCom o marido preso e as contas bloqueadas, Madalena recebe uma chamada de Sena com proposta financeira e de proteção. Ela telefona de volta para Sena e aceita entrar para o jogo da quadrilha.`
    ],
  },
];

export const SENA_EPISODES: ChapterEpisode[] = SENA_EPISODES_RAW.map(
  (ep) => ({
    id: `sena-${ep.slug}`,
    number: ep.number,
    label: ep.label,
    slug: ep.slug,
    title: ep.title,
    releaseDate: '2026',
    content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
    summary: ep.summary,
    pdfPages: ep.pages,
    isPdfScript: true,
  })
);
