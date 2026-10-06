import { MEDUSA_EPISODE_01_PAGES } from './medusaEpisodes/episode01';
import { MEDUSA_EPISODE_02_PAGES } from './medusaEpisodes/episode02';
import { MEDUSA_EPISODE_03_PAGES } from './medusaEpisodes/episode03';
import { MEDUSA_EPISODE_04_PAGES } from './medusaEpisodes/episode04';
import { MEDUSA_EPISODE_05_PAGES } from './medusaEpisodes/episode05';
import { MEDUSA_EPISODE_06_PAGES } from './medusaEpisodes/episode06';
import { ChapterEpisode } from '../types';

export interface MedusaEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const MEDUSA_EPISODES_RAW: MedusaEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — O Nascimento e a Dádiva da Beleza',
    summary:
      'Medusa nasce em um acampamento no mar Egeu. Seu pai Ceto a abençoa com o dom da beleza. No acampamento Fórcis, mãe de Medusa, reúne as filhas Esteno e Euríale, além de outras jovens moças e conta uma história sobre os deuses. Medusa revela o desejo de se tornar sacerdotisa da deusa Atena. A beleza de Medusa chama a atenção dos jovens rapazes, o que deixa Esteno chateada. O povo da região da Ática cobra aos deuses que coloquem um nome na cidade. Medusa ouve uma conversa de seus pais Ceto e Fórcis e descobre que é mortal. Em meio a tristeza de descobrir que é mortal, Medusa descobre que existe um mundo diferente fora do mar Egeu.',
    pages: MEDUSA_EPISODE_01_PAGES,
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — A Disputa por Atenas e a Escolha',
    summary:
      'Calisto fala a Atena sobre o pedido do povo por um nome para a cidade. Ela decide que a cidade se chamará ‘Atenas’. Medusa, Euríale e Esteno contam a Ceto e Fórcis a decisão de quererem ser sacerdotisas de Atena. Poseidon fica sabendo da decisão de Atena sobre o nome da cidade, ele não aceita e vai conversar com ela. Atena sugere que eles deem um presente ao povo do Ático, o presente que for aceito, o deus dará o nome a cidade. Calisto visita o acampamento no mar Egeu em busca de novas candidatas a sacerdotisas, Medusa e suas irmãs se apresentam. Calisto e Atena demonstram preocupação com a beleza de Medusa. Calisto e o sacerdote de Poseidon apresentam os presentes dos deuses.',
    pages: MEDUSA_EPISODE_02_PAGES,
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — A Batalha dos Deuses e o Ciúme',
    summary:
      'Medusa, Esteno e Euríale estão entre as jovens escolhidas para serem sacerdotisas de Atena. O povo escolhe o presente de Atena. Poseidon não aceita a escolha e propõe uma batalha contra Atena. Calisto ensina Medusa na sua primeira vez indo oferecer as oferendas a Atena. Atena se agrada de Medusa, o que causa ciúmes a Esteno. Poseidon ouve as palavras de Esteno e pede a ajuda dela para derrotar Atena. Poseidon e Atena travam uma grande batalha.',
    pages: MEDUSA_EPISODE_03_PAGES,
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — A Traição e a Maldição',
    summary:
      'Poseidon se irrita com Esteno por não ter descoberto a fraqueza de Atena. Esteno diz a Poseidon que ele pode se vingar. Calisto anuncia ao povo o nome da cidade. Esteno prepara um presente para Medusa entregar a deusa Atena, ela mente dizendo que foi ordem de Calisto. Medusa leva o presente para a deusa. Esteno avisa a Poseidon, que vai atrás de Medusa no templo de Atena. Poseidon pega Medusa a força. Esteno conta tudo a Calisto. Medusa vai ao templo entregar uma oferenda, ela pede perdão a Atena, irritada Atena surge e lança a maldição sobre Medusa, transformando-a em uma górgona.',
    pages: MEDUSA_EPISODE_04_PAGES,
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — O Banimento e o Juramento de Perseu',
    summary:
      'Medusa, Esteno e Euríale são transformadas em górgonas e são banidas. Díctis encontra Dânae e seu filho Perseu dentro do baú no mar. Díctis apresenta Dânae e seu filho ao rei Polidectes. Polidectes revela seus sentimentos por Dânae. Ela conta a Perseu que não aceita. Em um banquete, Polidectes recebe presentes dos convidados. Ele questiona o que Perseu tem a lhe oferecer como presente e Perseu promete a cabeça da Medusa. Polidectes cobra a Perseu o que prometeu e Perseu se sente pressionado.',
    pages: MEDUSA_EPISODE_05_PAGES,
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — A Jornada e o Destino da Górgona',
    summary:
      'Perseu se despede de Dânae e parte em busca da Medusa. Atena e Hermes aparecem para ajudá-lo, oferecendo um escudo e sandálias aladas. Perseu enfrenta as Graias e descobre que a prisão da Medusa fica além do Rio Estige. Ele chega ao submundo, enfrenta Medusa e consegue cortar sua cabeça, fazendo Pégaso surgir de seu sangue. Perseu retorna a Sérifos e entrega a cabeça da Medusa a Polidectes, que é petrificado ao olhar para ela. Díctis torna-se o novo rei de Sérifos, e Perseu reencontra sua mãe. Juntos, eles partem para o Olimpo, onde Perseu entrega a cabeça de Medusa a Atena, que a transforma em uma poderosa relíquia.',
    pages: MEDUSA_EPISODE_06_PAGES,
  },
];

export const MEDUSA_A_MALDICAO_DE_ATENA_EPISODES: ChapterEpisode[] =
  MEDUSA_EPISODES_RAW.map((ep) => ({
    id: `medusa-${ep.slug}`,
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
