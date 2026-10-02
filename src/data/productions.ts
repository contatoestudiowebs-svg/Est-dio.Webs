import { WebProduction, UnitType, ChapterEpisode } from '../types';
import { RASGA_MORTALHA_2_EPISODES } from './rasgaMortalha2Data';

function generateUnits(count: number, unitType: UnitType): ChapterEpisode[] {
  const prefix = unitType === 'capítulos' ? 'Capítulo' : 'Episódio';
  const slugPrefix = unitType === 'capítulos' ? 'capitulo' : 'episodio';
  return Array.from({ length: count }, (_, i) => {
    const num = i + 1;
    const padded = String(num).padStart(2, '0');
    return {
      number: num,
      label: `${prefix} ${padded}`,
      slug: `${slugPrefix}-${padded}`,
      title: `${prefix} ${padded}`,
      summary: `Espaço oficial preparado para o ${prefix.toLowerCase()} ${padded}.`,
    };
  });
}

export const PRODUCTIONS_DATA: WebProduction[] = [
  {
    id: 'caminho-ao-poder',
    title: 'Caminho ao Poder',
    slug: 'caminho-ao-poder',
    author: 'Fred Reids',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 10,
    status: 'Finalizada',
    featured: true,
    highlightOrder: 2,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_294c7c2efa1c48458e17b151396cb510~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_294c7c2efa1c48458e17b151396cb510~mv2.png',
    synopsis: 'Em meio à corrida presidencial dos Estados Unidos, uma mulher brilhante e ambiciosa, Evelyn Harper, é candidata à presidência, prometendo uma nova era de liderança e transformação para o país. No entanto, por trás de sua candidatura, existe uma trama complexa de intrigas e traições, orquestrada por sua própria assessora, Melissa Carter, que usa Evelyn para alcançar seus próprios objetivos de poder. A história se desdobra através de segredos, alianças e disputas, culminando em uma batalha de inteligência e estratégia para manter a verdade a salvo e garantir que os vilões paguem pelo que fizeram.',
    episodes: generateUnits(10, 'episódios')
  },
  {
    id: 'cold-case-brasil',
    title: 'Cold Case Brasil',
    slug: 'cold-case-brasil',
    author: 'Fernando Ricoboni',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 6,
    status: 'Finalizada',
    featured: true,
    highlightOrder: 2,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_fde61471066b4daab6be2def3a9f96b2~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_fde61471066b4daab6be2def3a9f96b2~mv2.png',
    synopsis: 'Inspirada no clássico americano Cold Case, Cold Case Brasil traz uma versão nacional intensa, humana e profundamente emocional sobre crimes esquecidos pelo tempo. A cada episódio, a investigadora Laura e sua equipe reabrem casos arquivados que pareciam condenados ao silêncio. Munidos de novas pistas, testemunhas que decidiram falar décadas depois e segredos enterrados, eles mergulham em histórias marcadas por dor, injustiça, paixão, ambição e arrependimento.\n\nMais do que descobrir assassinos, Cold Case Brasil busca devolver voz às vítimas, respostas às famílias e verdade a quem foi apagado pela passagem dos anos.\n\nSombria, emocionante e cheia de reviravoltas, a série mistura investigação policial com fortes dramas humanos — mostrando que algumas verdades nunca morrem.',
    episodes: generateUnits(6, 'episódios')
  },
  {
    id: 'um-novo-rei-2',
    title: 'Um Novo Rei 2',
    slug: 'um-novo-rei-2',
    author: 'Fred Reids',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 12,
    status: 'Finalizada',
    featured: true,
    highlightOrder: 3,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_91a9976d35da412bb0a852f63a297778~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_91a9976d35da412bb0a852f63a297778~mv2.png',
    synopsis: 'Em um reino marcado por guerras e segredos, o rei Dmitri luta para manter Mont-Ar unido enquanto forças obscuras começam a surgir nas sombras. Entre conspirações, magia proibida e inimigos ocultos, o destino do reino passa a depender de jovens herdeiros que ainda não conhecem todo o poder e os perigos que os cercam. Em meio a traições e batalhas pelo poder, uma nova era está prestes a começar.',
    episodes: generateUnits(12, 'episódios')
  },
  {
    id: 'rasga-mortalha-2',
    title: 'Rasga Mortalha 2',
    slug: 'rasga-mortalha-2',
    author: 'Fred Reids',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 5,
    status: 'Finalizada',
    featured: true,
    highlightOrder: 1,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_a2be2c24c82f41a9bc43bd0b8a40ba8d~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_a2be2c24c82f41a9bc43bd0b8a40ba8d~mv2.png',
    synopsis: 'Na pequena vila do interior, a paz da floresta é ameaçada quando Bernardo tenta vendê-la para empresários e acaba libertando um antigo espírito maligno ao quebrar um artefato sagrado. Possuído, ele provoca um incêndio devastador que destrói parte da comunidade oculta e leva à morte da Coruja Rasga Mortalha. Diante do caos, Caio, agora mais consciente de seus poderes, une-se ao avô Pedro e à Xamã Arará para realizar um novo ritual capaz de aprisionar o mal. Enquanto a floresta arde e segredos antigos vêm à tona, Caio se vê diante de uma escolha que poderá mudar para sempre seu destino e o futuro da comunidade.',
    episodes: RASGA_MORTALHA_2_EPISODES.map((ep) => ({
      number: ep.number,
      label: ep.label,
      slug: ep.slug,
      title: ep.title,
      summary: ep.summary,
      content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
      pdfPages: ep.pages,
    }))
  },
  {
    id: '451',
    title: '451',
    slug: '451',
    author: 'Fernando Ricoboni',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 8,
    status: 'Finalizada',
    featured: true,
    highlightOrder: 4,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_835265d7f6d24cef9e9458b0f71b6fd9~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_835265d7f6d24cef9e9458b0f71b6fd9~mv2.png',
    synopsis: 'Em um futuro próximo, a informação não é apenas controlada – ela é moldada em tempo real por algoritmos estatais. Livros físicos foram destruídos, e o governo mantém o monopólio da “verdade” por meio de uma rede de dados onipresente. Os “Apagadores” são agentes encarregados de eliminar qualquer registro considerado subversivo. Mas uma resistência silenciosa ainda guarda fragmentos de memória coletiva.',
    episodes: generateUnits(8, 'episódios')
  },
  {
    id: 'socio-do-amor',
    title: 'Sócio do Amor',
    slug: 'socio-do-amor',
    author: 'Edney Matias',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 25,
    status: 'Finalizada',
    featured: true,
    highlightOrder: 5,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_9ada38d3744c4f66a4c6a0c377b41f06~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_9ada38d3744c4f66a4c6a0c377b41f06~mv2.png',
    synopsis: 'Miguel é um jovem do Vidigal, estudante de Jornalismo, apaixonado por comunicação e engajado nas causas da comunidade. Criado por Griselda e Eduardo, ele é querido por todos, mas carrega marcas de um amor mal resolvido com Juan, que abalou sua autoestima. Do outro lado da cidade está Rodrigo, um engenheiro ambicioso, bem-sucedido e solitário, que esconde seus conflitos pessoais atrás da carreira. Dividido entre desejos e aparências, ele vive relações vazias até se envolver com Jhonatan, um homem sedutor e interesseiro.\n\nOs caminhos de Miguel e Rodrigo se cruzam após um escândalo empresarial, quando um confronto profissional se transforma em atração. Entre choques, descobertas e paixão, eles se aproximam cada vez mais. Enquanto Miguel apresenta a força da vida na comunidade, Jhonatan fará de tudo para impedir esse amor. No contraste entre o Vidigal e o mundo dos negócios, os dois precisarão enfrentar preconceitos, ambições e seus próprios medos para viver um sentimento intenso e transformador.',
    episodes: generateUnits(25, 'capítulos')
  },
  {
    id: 'eu-sou-piaf',
    title: 'Eu Sou Piaf',
    slug: 'eu-sou-piaf',
    author: 'Fred Reids',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 16,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_8abfe7f8146048788a481427bfb9c63b~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_8abfe7f8146048788a481427bfb9c63b~mv2.png',
    synopsis: 'Marcelo é um jovem sonhador. Cresceu vendo sua mãe ouvir Edith Piaf e acabou se tornando um grande fã da cantora. E hoje ele divide seu tempo entre trabalho, como lavador de pratos, e pequenas apresentações nas noites, onde interpreta as músicas de Edith Piaf. Seus pais descobrem o que ele faz nas noites e expulsam Marcelo de casa. Marcelo vê uma oportunidade de mudar de vida e viver seu sonho quando abrem inscrições para uma seleção de talentos para um grande teatro da cidade. Marcelo é inscrito por sua amiga. No dia de sua apresentação, Marcelo dá um show como Edith Piaf, todos se encantam com a incrível apresentação.',
    episodes: generateUnits(16, 'capítulos')
  },
  {
    id: 'terra-de-bravos',
    title: 'Terra de Bravos',
    slug: 'terra-de-bravos',
    author: 'Liz Santos',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 16,
    status: 'Finalizada',
    featured: true,
    highlightOrder: 6,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_451c396f6dad4600a4d7fd75c97beaab~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_451c396f6dad4600a4d7fd75c97beaab~mv2.png',
    synopsis: 'Na Fazenda do Brejo, duas famílias rivais – os Monteiro e os Ferraz – disputam há décadas a posse da rica Fazenda, uma terra fértil e cheia de água em meio à seca. Com a morte misteriosa do patriarca Joaquim Monteiro, o retorno de seu neto Miguel de São Paulo reacende o conflito. Enquanto isso, amores proibidos, segredos antigos e alianças improváveis surgem em meio ao solo rachado e às tempestades da alma.',
    episodes: generateUnits(16, 'capítulos')
  },
  {
    id: 'infidelidade',
    title: 'Infidelidade',
    slug: 'infidelidade',
    author: 'Fernando Ricoboni',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 15,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_cb487eb87446490895186f78c158901e~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_cb487eb87446490895186f78c158901e~mv2.png',
    synopsis: 'Raquel, uma mulher dedicada à carreira e frustrada em seu casamento, se envolve com seu chefe Gutiérrez, um empresário sedutor e manipulador. Paulo, seu marido, fragilizado e desempregado, acaba sendo seduzido por Elza, a irmã mais nova de Raquel, uma mulher ferida e cheia de traumas. Paralelamente, outras histórias se entrelaçam: a jovem Nádia, que vive um romance com Zel e engravida; Catarina, mãe de Sérgio e Paulo, que tenta manter a família unida após a morte do marido Marcello; Adelina e Valter, pais de Raquel e Elza; e Margot, esposa de Gutiérrez, que trama a ruína do marido e o retorno ao poder.',
    episodes: generateUnits(15, 'episódios')
  },
  {
    id: 'coracoes-de-acucar',
    title: 'Corações de Açúcar',
    slug: 'coracoes-de-acucar',
    author: 'Everton B Dutra',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 16,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_326fcfe93cc7437b8ab7d385cc46b378~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_326fcfe93cc7437b8ab7d385cc46b378~mv2.png',
    synopsis: 'Bás Avelar, herdeiro de uma família rica, sempre obteve tudo o que desejou, exceto um amor genuíno. Sua relação com Alesso, um homem intenso, controlador e sedutor, revela-se sua maior contradição. Alesso, por sua vez, não ama Bás, vendo-o apenas como um meio de manter seu estilo de vida luxuoso após a ruína financeira de seu pai, Bonjo. O casamento com Bás surge como a solução para escapar da miséria. Seguro da dependência emocional de Bás, Alesso o manipula e trai constantemente, certo de que o noivo sempre retornará. Em paralelo, Cássian, um jovem sonhador, gentil e ingênuo, observa a vida alheia na sapataria onde trabalha com sua amiga Lana. Ele se encanta por Bás, idealizando-o como um “príncipe encantado dos sapatos de couro ecológico”. Surpreendentemente, Bás o convida para sair, um gesto que Cássian desconhece ser apenas uma tentativa de despertar ciúmes em Alesso, sem intenção real de um encontro. Logo, Cássian percebe a ilusão em que se envolveu.',
    episodes: generateUnits(16, 'capítulos')
  },
  {
    id: 'pandorum-2',
    title: 'Pandorum 2',
    slug: 'pandorum-2',
    author: 'Fernando Ricoboni',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 7,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_96c8315bda964573a3447f8949da9b69~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_96c8315bda964573a3447f8949da9b69~mv2.png',
    synopsis: 'A segunda temporada de PANDORUM mergulha ainda mais fundo na luta entre opressão e liberdade. Após os eventos devastadores da primeira temporada, Peter, Lyka, Tommy, Jen, OG e Makar enfrentam novas alianças, traições e segredos sombrios no coração do Paraíso. Enquanto a resistência se fortalece nos Setores devastados, Satir intensifica seu controle com planos cruéis e visões distorcidas de um novo mundo. Entre fugas eletrizantes, reviravoltas emocionantes e sacrifícios dolorosos, a temporada culmina em uma traição inesperada.',
    episodes: generateUnits(7, 'episódios')
  },
  {
    id: 'as-mina-parte-2',
    title: 'As Mina — Parte 2',
    slug: 'as-mina-parte-2',
    author: 'Liz Santos',
    category: 'Web novela',
    unitType: 'episódios',
    totalUnits: 16,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_cf3ab50200af4a9da3577418d1db1b25~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_cf3ab50200af4a9da3577418d1db1b25~mv2.png',
    synopsis: 'Carol, Isadora e Tamara estão de volta. Nessa segunda temporada, As Mina vão enfrentar problemas com suas respectivas mães. Carol terá que lidar com as cobranças de sua mãe Olga, que depois que descobre a traição de Bruno, passa a administrar a carreira da filha. Já Isadora passará por um momento delicado: sua mãe Aurora descobre um câncer. Isa ficará responsável por administrar os negócios da mãe. E Tamara terá que lidar com a volta de sua mãe Salete, que era dada como morta. E esse é o menor dos problemas. Salete passa a tomar o dinheiro que Tamara recebe como salário, trabalhando na lanchonete.',
    episodes: generateUnits(16, 'episódios')
  },
  {
    id: 'medusa-a-maldicao-de-atena',
    title: 'Medusa: A Maldição de Atena',
    slug: 'medusa-a-maldicao-de-atena',
    author: 'Fred Reids',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 6,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_eeb860d4f26d46438edd141a87f0b1e8~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_eeb860d4f26d46438edd141a87f0b1e8~mv2.png',
    synopsis: 'Medusa era uma jovem bela que, junto das irmãs Esteno e Euríale, servia como sacerdotisa de Atena. Filha de Fórcis e Ceto, era a única mortal da família e mantinha a castidade para seguir o sacerdócio. Após Atena vencer Poseidon na disputa pela cidade de Ática, Poseidon, furioso, violou Medusa no templo. Atena, irada, puniu Medusa, transformando-a num monstro com serpentes no lugar dos cabelos e olhar que petrificava. Expulsas, as irmãs se refugiaram em uma caverna até que Perseu, com ajuda dos deuses, decapitou Medusa. Do sangue dela surgiu Pégasus, fruto da relação entre Medusa e Poseidon.',
    episodes: generateUnits(6, 'episódios')
  },
  {
    id: 'a-santa-do-pau-oco',
    title: 'A Santa do Pau Oco',
    slug: 'a-santa-do-pau-oco',
    author: 'Fred Reids',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 6,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_fc095adec5a34548bd1545878589d704~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_fc095adec5a34548bd1545878589d704~mv2.png',
    synopsis: 'Baronesa é uma mulher muito rica, de dinheiro, mas pobre do amor dos três filhos: Cláudio, Ademir e Sandra. Ao perceber que os filhos só se importam com o dinheiro dela, Baronesa, antes de morrer, faz um enigma para que seus filhos encontrem onde ela deixou o documento com toda a sua herança. E isso dá início a uma grande confusão, porque Baronesa ainda em vida doa muitos dos seus bens para a Igreja Católica. E a casa onde mora, ela deixa para sua doméstica e governanta, Fátima.',
    episodes: generateUnits(6, 'episódios')
  },
  {
    id: 'busca-de-bercos',
    title: 'Busca de Berços',
    slug: 'busca-de-bercos',
    author: 'Guilhardo Almeida',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 35,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_67a3c93990124e7cbef2fa9b05ba8f22~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_67a3c93990124e7cbef2fa9b05ba8f22~mv2.png',
    synopsis: 'Órfã desde criança, Asha sempre sonhou em encontrar seu pai biológico. Aos vinte e dois anos, ela decide seguir essa busca, mas o que parecia um simples desejo de pertencimento a arrasta para uma realidade sombria e perigosa — onde os laços de sangue podem ser tanto uma bênção quanto uma maldição, e onde, para conseguir o que quer, talvez ela precise pagar um preço alto demais.',
    episodes: generateUnits(35, 'capítulos')
  },
  {
    id: 'homem-com-h',
    title: 'Homem com H',
    slug: 'homem-com-h',
    author: 'Fernando Ricoboni',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 8,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_9a0bf519062c49cea2fe3bbf5615a4be~mv2.png/v1/fill/w_369,h_536,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cbfc82_9a0bf519062c49cea2fe3bbf5615a4be~mv2.png',
    synopsis: 'Em um escritório repleto de mulheres carismáticas, modernas e cheias de personalidade, Humberto é o único homem da equipe. Entre conversas sobre moda, maquiagem, relacionamentos e as mais diversas questões do universo feminino, ele descobre que sua opinião, mesmo cheia de trapalhadas e mal-entendidos, é mais valiosa do que imaginava. A cada episódio, Humberto tenta navegar por esse universo com bom humor e uma dose de ingenuidade, criando momentos cômicos e inesperados. Com histórias independentes e muito divertidas, Homem com H é uma série de comédia leve, cheia de situações hilárias, que aborda o dia a dia de um homem tentando encontrar seu lugar em um ambiente dominado pelo universo feminino.',
    episodes: generateUnits(8, 'episódios')
  },
  {
    id: 'rute',
    title: 'Rute',
    slug: 'rute',
    author: 'Liz Santos',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 18,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_6fc924ffddf24c0b846d2d6472f8299a~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_6fc924ffddf24c0b846d2d6472f8299a~mv2.png',
    synopsis: 'Em busca de uma vida melhor, após enfrentar dificuldades em Belém de Judá, Elimeleque decide se mudar com sua esposa Noemi e seus filhos, Malom e Quiliom para Moabe. Na terra estrangeira, Noemi e seus filhos sofrem a perda de Elimeleque. É quando Rute entra na vida de Noemi. Ela começa a se encontrar com Malom, e Quiliom com Orfa. Entre idas e vindas, eles se casam. E Noemi tem mais um momento difícil em sua vida quando perde seus dois filhos. Rute e Orfa acabam ficando viúvas. É quando Noemi decide voltar para Belém. Com uma profunda devoção, Rute declara: “Onde você for, irei; onde você ficar, ficarei.” Em Belém, ela trabalha arduamente para sustentar ambas, colhendo espigas em campos. Sua dedicação chama a atenção de Boaz, um parente rico de Noemi, que se torna seu protetor e eventual redentor.',
    episodes: generateUnits(18, 'capítulos')
  },
  {
    id: 'pandorum',
    title: 'Pandorum',
    slug: 'pandorum',
    author: 'Fernando Ricoboni',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 8,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_210d33e510854ef79aac322b4003038e~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_210d33e510854ef79aac322b4003038e~mv2.png',
    synopsis: 'Em um mundo dominado pela tirania de SATIR, LYKA, a única sobrevivente de um massacre brutal, se une a rebeldes que lutam contra a opressão. MATIAS, seu pai, trama uma revolução arriscada, enquanto HOLLER caça sem piedade cada rebelde. PETER, um órfão, resgata LYKA e se junta à luta pela liberdade sob a liderança da enigmática general GALENA. Segredos obscuros e traições marcam essa batalha intensa pela sobrevivência e justiça!',
    episodes: generateUnits(8, 'episódios')
  },
  {
    id: 'no-te-pido-flores',
    title: 'No Te Pido Flores',
    slug: 'no-te-pido-flores',
    author: 'Everton B Dutra',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 11,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_bc4859489b434059b3490eca04ac8b1d~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_bc4859489b434059b3490eca04ac8b1d~mv2.png',
    synopsis: 'Martin e Lupe protagonizam embates épicos, recheados de sagacidade e acidez, mas no meio de tudo isso descobrem um sentimento mais forte que o ódio.',
    episodes: generateUnits(11, 'episódios')
  },
  {
    id: 'nada-alem-do-seu-amor',
    title: 'Nada Além do Seu Amor',
    slug: 'nada-alem-do-seu-amor',
    author: 'Everton B Dutra',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 21,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_1781c057924d42a4ac6ddabec34f3ee1~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_1781c057924d42a4ac6ddabec34f3ee1~mv2.png',
    synopsis: 'Em uma noite tempestuosa e fatídica os destinos de Aquiles e André acabam se cruzando. André, embora de família rica, passou a morar nas ruas por ser um dependente químico e, na porta de uma igreja, era acometido por uma overdose. Prestes a morrer, o jovem é acudido por Aquiles, que estava a caminho do baile de formatura do ensino médio quando o ônibus quebrou e o mesmo precisou buscar abrigo na igreja. Inconsciente da tragédia que era a vida do rapaz, André acaba ficando com uma correntinha que Aquiles carregava no pescoço, o que viria a se tornar a única lembrança física da pessoa que salvou sua vida e combustível para sua busca por essa pessoa durante anos e anos a fio.',
    episodes: generateUnits(21, 'capítulos')
  },
  {
    id: 'sangue-cruzado',
    title: 'Sangue Cruzado',
    slug: 'sangue-cruzado',
    author: 'Fred Reids',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 20,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_76db79f328ee4d27809aab184860b4ba~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_76db79f328ee4d27809aab184860b4ba~mv2.png',
    synopsis: 'O que leva alguém a querer se vingar? Elizabeth culpa sua irmã Cristina por tudo o que deu errado em sua vida. E para se vingar da irmã, Elizabeth vai se envolver com seu sobrinho, Pedro, para tomar tudo o que é dele e ter sua vingança. Com a ajuda de Maurílio, Elizabeth colocará seu plano em prática, mas o destino prepara situações que podem atrapalhar Elizabeth de realizar sua vingança. Remake da história original exibida em 2015 no ADNTV.',
    episodes: generateUnits(20, 'capítulos')
  },
  {
    id: 'destino-ao-coracao',
    title: 'Destino ao Coração',
    slug: 'destino-ao-coracao',
    author: 'Everton B Dutra',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 12,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_4eded516fbfb41a3a884ea530520beb1~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_4eded516fbfb41a3a884ea530520beb1~mv2.png',
    synopsis: 'Thales fugiu de sua cidade natal para evitar seu amor de adolescência pelo rústico Joca, mas retorna à pitoresca cidade de Graçaville anos depois, no intuito de vender a fazenda de sua avó falecida para evitar seu declínio financeiro. Pensando que Joca é um heterossexual convicto, Thales mal sabe que seu amigo também guarda segredos profundos. Acontece que Joca secretamente é apaixonado por Thales, mas agora o odeia por tê-lo abandonado e aos velhos amigos.',
    episodes: generateUnits(12, 'capítulos')
  },
  {
    id: 'debora-e-rebeca',
    title: 'Débora & Rebeca',
    slug: 'debora-e-rebeca',
    author: 'Fred Reids',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 15,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_abde23eba1b647d7a3d370e1a6a304d2~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_abde23eba1b647d7a3d370e1a6a304d2~mv2.png',
    synopsis: 'Débora e Rebeca, esposas aparentemente convencionais em 1928, vivem em uma sociedade regida por normas estritas. Seu destino se entrelaça em um encontro secreto, desafiando as convenções sociais. À medida que compartilham segredos e desenvolvem uma conexão proibida, enfrentam o dilema doloroso de seguir seus corações sem destruir suas vidas. Débora e Rebeca é uma comovente história de amor proibido e coragem, uma jornada de autodescoberta e a luta por felicidade em um mundo que exige conformidade, desafiando normas e redefinindo coragem e lealdade.',
    episodes: generateUnits(15, 'capítulos')
  },
  {
    id: 'as-mina',
    title: 'As Mina',
    slug: 'as-mina',
    author: 'Liz Santos',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 14,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_cb5f1af4c8e7409d83964e1bb0644ac7~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_cb5f1af4c8e7409d83964e1bb0644ac7~mv2.png',
    synopsis: 'Carol é ginasta e tem o sonho de estudar fora do país para ter um melhor desempenho e participar de uma Olimpíada. Seu pai, Bruno, se empenha em conseguir um patrocínio para que Carol estude fora. Isadora é uma garota rica, mas não aceita as coisas que sua mãe, Aurora, impõe, então decide se matricular em um colégio público sem sua mãe saber e esconde de suas amigas quem realmente é. Já Tamara é uma menina esforçada e tem que lidar com o problema do alcoolismo de seu pai, Berto, que além de beber, passa dias fora de casa, e Tamara tem que se dobrar para cuidar também da sua irmã Eva. Essas três histórias se tornam uma só em As Mina.',
    episodes: generateUnits(14, 'episódios')
  },
  {
    id: 'acesso-1',
    title: 'ACESSO 1',
    slug: 'acesso-1',
    author: 'Liz Santos',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 20,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_d43f0a0c15674fc797184d3c03eb81da~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_d43f0a0c15674fc797184d3c03eb81da~mv2.png',
    synopsis: 'Amélia sempre foi uma jovem esforçada. Ela decide se mudar para a capital do Rio de Janeiro com seu pai, Alberto, em busca de encontrar sua mãe. Só que ela conhece Samuel. Nos primeiros encontros, ela o destratará, mas ele não desistirá assim tão fácil dela. O maior problema é que ele tem um namoro mal resolvido com Rafaela, a garota popular do colégio ACESSO onde eles estudam. Para deixar esse conflito ainda mais interessante, Amélia passa a trabalhar na casa de Rafaela.',
    episodes: generateUnits(20, 'capítulos')
  },
  {
    id: 'topazio',
    title: 'Topázio',
    slug: 'topazio',
    author: 'Fred Reids',
    category: 'Web novela',
    unitType: 'episódios',
    totalUnits: 25,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_bddc617935314ef48dffa8bbf62515a7~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_bddc617935314ef48dffa8bbf62515a7~mv2.png',
    synopsis: 'No início da adolescência, Beatriz (Bita) perde seu pai Robério. Anos depois descobre que a morte do seu pai foi por negligência dos patrões dele Marcelo e Regina, que o acusaram de roubar o diamante Topázio. Bita acredita na inocência do pai e promete vingança. Por ironia do destino consegue um trabalho como babá na casa da família Topázio. Lá ela luta para descobrir os segredos da família e destruir com todos. Bita conta com a ajuda de Ítalo, sobrinho de Marcelo, e Agnes, irmã de Marcelo. Os dois querem algo na empresa de Marcelo e passaram a chantagear Lucas. Bita descobre segredos e consegue a vingança que tanto planejou.',
    episodes: generateUnits(25, 'episódios')
  },
  {
    id: 'amar-a-seu-modo',
    title: 'Amar a Seu Modo',
    slug: 'amar-a-seu-modo',
    author: 'Everton B Dutra',
    category: 'Web novela',
    unitType: 'capítulos',
    totalUnits: 31,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_942fc93608c44ae99f933eb023b12bc3~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_942fc93608c44ae99f933eb023b12bc3~mv2.png',
    synopsis: 'Felippo e Elói eram amigos inseparáveis quando crianças, mas essa amizade é brutalmente interrompida pela ignorância e impetuosidade de Alberto, pai de Felippo, que nunca enxergou com bons olhos o sentimento que os dois nutriam um pelo outro. Anos depois, já adultos, os caminhos dos dois rapazes se cruzam novamente e um sentimento nasce a partir da maneira como cada um deles enxerga a vida. Amar a Seu Modo narra as diferentes maneiras de amar, e o amor em seus mais diversos modos.',
    episodes: generateUnits(31, 'capítulos')
  },
  {
    id: 'ponto-fraco',
    title: 'Ponto Fraco',
    slug: 'ponto-fraco',
    author: 'Liz Santos',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 6,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_191ef35d6bfb4a72b331172bf74a5e0d~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_191ef35d6bfb4a72b331172bf74a5e0d~mv2.png',
    synopsis: 'Frida é uma assassina profissional e conta com a ajuda de sua amiga Dorotéia para conseguir serviços e ter seus rastros apagados. Mas tudo muda quando Frida descobre que o Chefão está atrás dela. Frida se envolve com James e acaba tendo um filho. Dorotéia acredita que esse filho pode ser o Ponto Fraco de Frida. Frida tem o filho tirado dos seus braços e a história toma um rumo diferente, com segredos e revelações.',
    episodes: generateUnits(6, 'episódios')
  },
  {
    id: 'sena',
    title: 'SENA',
    slug: 'sena',
    author: 'Liz Santos',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 6,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_2a44a37db9514aa99f3f78485abc1abc~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_2a44a37db9514aa99f3f78485abc1abc~mv2.png',
    synopsis: 'Em uma intrincada teia de poder e lealdade volátil, Sena, líder de uma quadrilha habilidosa, enfrenta uma ameaça desconhecida. Ao perceber a necessidade de proteger seus aliados, toma a surpreendente decisão de entregá-los à polícia. Traídos, seus subordinados enfrentam a justiça, enquanto Sena elabora secretamente um plano audacioso, envolvendo a delegada Helena para enganar os investigadores. A trama se desenrola com mistérios e reviravoltas, revelando a complexidade do jogo de Sena.',
    episodes: generateUnits(6, 'episódios')
  },
  {
    id: 'o-suplicio',
    title: 'O Suplício',
    slug: 'o-suplicio',
    author: 'Everton B Dutra',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 6,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_5bd3799907fb4098bcde7a2e63509b90~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_5bd3799907fb4098bcde7a2e63509b90~mv2.png',
    synopsis: 'Situada em Loureiro Vitoriosa, uma cidadezinha rural e interiorana, o jovem Carlos de Lucca retorna anos após ser expulso e jurado de morte pelo assassinato de seu melhor amigo, mas ele logo irá descobrir os mistérios assombrosos que rodeiam o lugar e seus habitantes, enquanto lida com a fatal atração que sente por Juan Brasão, irmão adotivo de quem outrora fora seu melhor amigo e de quem cuja a morte ainda lhe é uma grande incógnita.',
    episodes: generateUnits(6, 'episódios')
  },
  {
    id: 'um-novo-rei-1-temporada',
    title: 'Um Novo Rei — 1ª Temporada',
    slug: 'um-novo-rei-1-temporada',
    author: 'Fred Reids',
    category: 'Web série',
    unitType: 'episódios',
    totalUnits: 11,
    status: 'Finalizada',
    coverImage: 'https://static.wixstatic.com/media/cbfc82_c64e16466fcb49278c87acf083f99b97~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_c64e16466fcb49278c87acf083f99b97~mv2.png',
    synopsis: 'Com a ambição de tomar Mont-Ar, Emma arma um plano em que mata a rainha e dá um fim ao herdeiro do trono. Ela então casa-se com o rei e o trai ao matá-lo. Ela assume o trono e com ajuda do bruxo Dalibor, ela faz Mont-Ar sucumbir aos seus pés. Anos depois, Emma e Dalibor descobrem que o herdeiro do trono está vivo e que seu reinado está com os dias contados.',
    episodes: generateUnits(11, 'episódios')
  }
];

export function getProductionBySlug(slug: string): WebProduction | undefined {
  return PRODUCTIONS_DATA.find((p) => p.slug === slug);
}

export function getProductionsByAuthor(authorName: string): WebProduction[] {
  return PRODUCTIONS_DATA.filter((p) => p.author.toLowerCase() === authorName.toLowerCase());
}

export function getProductionsByCategory(category: string): WebProduction[] {
  return PRODUCTIONS_DATA.filter((p) => p.category.toLowerCase() === category.toLowerCase());
}

export function getFeaturedProductions(): WebProduction[] {
  return PRODUCTIONS_DATA.filter((p) => p.featured).sort((a, b) => (a.highlightOrder || 99) - (b.highlightOrder || 99));
}
