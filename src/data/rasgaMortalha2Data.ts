// Dados completos dos 5 episódios de Rasga Mortalha 2 por Fred Reids
// Contendo os resumos oficiais e as páginas completas dos roteiros originais em PDF

export interface ScriptEpisodeData {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const RASGA_MORTALHA_2_EPISODES: ScriptEpisodeData[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — O Aviso da Mata',
    summary:
      'Bernardo visita a mata acompanhando dois empresários, que planejam comprar aquela mata para fazerem um resort. A Coruja encima da árvore ouve a conversa. Pedro comenta com seu neto Caio, sobre as andanças de Bernardo pela mata. O Coruja conversa com a Xamã Arará sobre o perigo que a comunidade pode enfrentar. Bernardo vai até a casa de Pedro e faz a proposta para que ele venda sua casa, mas Pedro se recusa. Em um momento de desastre, Bernardo acaba quebrando o artefato de Pedro. À noite, possuído pelo espírito maligno, Bernardo por fogo na mata.',
    pages: [
      `Rasga Mortalha 2

EPISÓDIO 01

De
Fred Reids`,

      `MATA ANTIGA – DIA.

Luz suave atravessa as copas densas das árvores. O som dos pássaros é interrompido pelo estalo de gravetos sendo pisados. Três homens surgem entre a vegetação: Bernardo, 35 anos, ambientalista local, trajando roupas simples e botinas gastas, caminha à frente de dois homens engravatados – os empresários, em trajes caros, suando sob o calor úmido.

No alto de uma árvore frondosa, quase invisível entre as folhas, uma imponente Coruja observa tudo em silêncio. Seus olhos amarelos acompanham os movimentos dos homens com atenção.

BERNARDO
(para os empresários, abrindo os braços)
Aqui é onde tudo começa. Esta mata tem mais de trezentos anos. É uma casa de espécies que não existem em nenhum outro lugar do estado. Tem nascente ali adiante, e à noite, o céu fica tão limpo que dá pra ver até Vênus piscando.

EMPRESÁRIO 1
(impaciente, olhando em volta)
Encantador, sim. Mas pense no potencial, Bernardo. Um resort aqui seria um paraíso. Exclusivo. Ecológico, se preferir. Podemos preservar algumas árvores, construir com madeira certificada...

EMPRESÁRIO 2
(sorrindo, persuasivo)
A ideia é integrar o luxo à natureza. Imagine bangalôs suspensos, trilhas guiadas... E claro, lucros. Você pode ser nosso consultor ambiental. Com seu nome no projeto, os órgãos públicos nem vão questionar.

BERNARDO
(firme, mas educado)`,

      `Eu conheço esse lugar desde menino. Cada trilha, cada canto. O som dos bichos muda quando o tempo vai virar. O vento sopra diferente quando a mata sente medo. E agora... ela tá em silêncio.

Os empresários se entreolharam, confusos. No alto da árvore, a Coruja emite um canto rouco e sinistro, que ecoa pela mata.

CORUJA RASGA-MORTALHA
(baixinho, como um sussurro para si mesma)
Ouço o veneno nos lábios dos homens... (pausa) E o grito das raízes que já se contorcem...

EMPRESÁRIO 1
(arrepiado)
Que som foi esse?

BERNARDO
(sorri de canto, sem olhar pra cima)
A mata respondeu.

EMPRESÁRIO 2
(engolindo seco)
Isso… isso é só uma coruja, não?

BERNARDO
Rasga-mortalha. Dizem que ela aparece antes da morte. Mas nem sempre é de gente… Às vezes, é o aviso de que a alma de um lugar tá sendo condenada.

Silêncio. Os empresários hesitam. A coruja, imóvel, os observa com olhos vivos. Bernardo os encara com serenidade, como quem já ouviu o veredito. Eles seguem de volta a estrada conversando.

VARANDA DA CASA DE PEDRO – DIA.

Pedro está sentado em uma cadeira de palha, afiando um pedaço de madeira com canivete. Caio sai de dentro de casa e fica de pé observando a floresta por algum tempo.`,

      `PEDRO
(olhando pra mata, sem parar o que está fazendo)
Teu avô já viu muita coisa nesse mato... Mas hoje, vi uma que me deixou com a pulga atrás da orelha.

CAIO
(desviando o olhar do celular)
O quê foi, vô?

PEDRO
(suspira, sério)
O Bernardo. Aquele que vive mais no mato do que na cidade. Ele apareceu por aqui novamente e agora com dois sujeitos... tudo engravatado, óculos escuros, pareciam mais perdidos que cego em tiroteio.

CAIO
Engravatado na trilha? Tá de sacanagem...

PEDRO
Pois é. Mas não era trilha de turista, não. Era caminho velho, daqueles que só quem nasceu por aqui conhece. E o pior... pararam bem perto da árvore da coruja.

CAIO
(senta, mais interessado)
A Rasga-mortalha?

PEDRO
Ele mesmo. Tava lá em cima, calada... até a hora que eles começaram a conversar. A coruja gritou. Gritou daquele jeito que até o vento pára pra escutar.

CAIO
E você entendeu alguma coisa?`,

      `PEDRO
Não ouvi tudo, mas deu pra sacar o tom. Tão querendo comprar aquele pedaço de mata. Falaram de resort, bangalô, sei lá o quê...
(pausa, olhando o horizonte)
Quando o homem começa a falar de lucro no meio da floresta, é sinal de que vem desgraça.

CAIO
E o Bernardo? Ele vai aceitar?

PEDRO
Não sei. O Bernardo é teimoso, mas também é sozinho. E esses caras sabem usar palavras bonitas para enfeitiçar quem escuta.
(olha pro neto)
Só sei que se mexerem com a mata, vão acordar coisa que nem eu, nem tu, nem ninguém vai conseguir fazer voltar a dormir.

CAIO
Tipo o quê, vô?

PEDRO
(sorri de canto, olhos fixos na escuridão que avança entre as árvores)
A mata guarda seus próprios guardiões, Caio. E nem sempre eles têm paciência com gente metida a dono. O que você viu é apenas um pedaço do que essa floresta esconde.

Silêncio. O som da mata começa a aumentar ao fundo – insetos, pássaros, folhas se mexendo.

RIACHO DA MATA – NOITE.

A lua cheia brilha forte no céu, refletida nas águas calmas de um riacho que serpenteia por entre as pedras cobertas de musgo. A floresta parece suspensa no tempo, embalada pelo som da água corrente e o coaxar distante de sapos. A neblina rasteira envolve o chão da mata.`,

      `À beira do riacho, ajoelhada sobre uma pedra lisa, está Arara, Xamã da comunidade. Ela segura um pequeno cacho de folhas e murmura preces antigas.

De cima de um galho curvado que se estende sobre o riacho, a Coruja Rasga Mortalha desce lentamente, pairando no ar com um bater de asas silencioso, até pousar numa pedra próxima. Quando fala, sua voz é grave, ancestral, quase um eco da própria floresta.

CORUJA RASGA-MORTALHA
O vento sussurrou antes do grito da terra... Eles estão vindo.

ARARA
(sem se virar, com os olhos fechados)
Eu senti. A água ficou inquieta. As folhas começaram a cochichar.
(pausa) É o homem que não ouve e não vê.

CORUJA RASGA-MORTALHA
Trouxeram a ganância nos olhos e o ferro nos pés. Pisam como se o chão não tivesse alma.

ARARA
(abre os olhos, encarando a coruja)
É Bernardo? Ele sempre foi nosso elo. Não deixaria isso acontecer...

CORUJA RASGA-MORTALHA
Até o mais sábio pode se curvar diante da solidão. Ele carrega dúvida no peito. E dúvida é fresta por onde entra a escuridão.

ARARA
A comunidade não está pronta. Muitos se esqueceram da linguagem das raízes... do respeito aos espíritos da mata.
(toca a água com os dedos)
Se eles derrubarem essas árvores... a comunidade entra em perigo.`,

      `CORUJA RASGA-MORTALHA
A mata tem paciência, mas não piedade. Se for violada, responderá com tempestade e sombra.

ARARA
Então é hora. Hora de lembrar aos nossos quem somos. Hora de acender os fogos antigos e chamar os guardiões.

CORUJA RASGA-MORTALHA
Não basta chamar, pequena Arara. É preciso coragem. Aqueles que se levantarem agora enfrentarão não só homens... mas o esquecimento.

ARARA
Que venham. Meu sangue é de fogo. Minha voz carrega os cânticos dos meus avós.
(se levanta lentamente)
Se eles cruzarem o rio sagrado... vão conhecer o silêncio da mata ferida. Precisaremos novamente da ajuda do Pedro e do Caio.

A coruja estufa as penas e abre as asas lentamente, olhando para a escuridão entre as árvores.

CORUJA RASGA-MORTALHA
Que o tambor do trovão te acompanhe, Xamã. A noite vai te proteger.

Com um bater de asas repentino, a coruja sobe aos céus, sumindo entre os galhos. Arara observa por um instante, depois recolhe suas folhas e começa a subir por uma trilha escondida entre as pedras.

CASA DE PEDRO – MANHÃ.

O sol da manhã desponta entre as árvores, lançando feixes dourados que atravessam a neblina leve da mata. O cheiro de café recém passado se espalha no ar.

Pedro está sentado na varanda. Perto dele repousa um artefato antigo. Ao longe, ouvem-se passos apressados na`,

      `trilha. É Bernardo, vestido com calça jeans limpa e camisa de botão. O rosto está mais sério que de costume. Ele sobe os degraus da varanda. Pedro nem levanta os olhos.

PEDRO
Você aqui logo cedo, Bernardo. Isso é bom ou ruim?

BERNARDO
(puxando uma cadeira, sem pedir)
Direto ao ponto, Pedro. Tô aqui pra fazer uma proposta.

PEDRO
(para de esculpir, encara Bernardo)
Hm.

BERNARDO
Essa sua casa, esse terreno... eu tenho gente interessada. Gente com dinheiro. Dá pra você viver bem até o fim dos dias. Sem se preocupar com nada. (pausa) É só assinar.

PEDRO
(sorri de canto)
Eu planto aqui desde antes de você nascer, Bernardo. Vi tua mãe parindo no barranco. Enterrei teu pai ali, debaixo do jenipapeiro.
(pausa) E tu quer que eu vá embora?

BERNARDO
Isso aqui vai mudar, Pedro. Resort, progresso. Você não quer ficar no meio da bagunça, quer?

PEDRO
(levanta com calma)
Eu não tô no meio de nada. Tô onde sempre estive. É vocês que tão chegando como enxurrada, arrancando tudo.

Pega o artefato com delicadeza.`,

      `PEDRO
Tem coisas que não se movem com dinheiro.

BERNARDO
(suspira, se levanta irritado)
Você não entende! Isso aqui vai trazer emprego, vai tirar esse povo do atraso. É pra todo mundo!

PEDRO
Não. É pra vocês.

BERNARDO
(dá um passo impaciente, esbarra na mesinha)
Porra...

Num instante, ele tropeça no tapete de palha da varanda e, tentando se equilibrar, tomba em Pedro, o artefato ancestral escorrega e se espatifa no chão, quebrando-se em três partes. O silêncio é sepulcral. Pedro paralisa. Os olhos dele brilham de raiva contida e dor.

PEDRO
(voz baixa, grave)
Você... quebrou o que não entendia.

BERNARDO
(se abaixa, arrependido)
Pedro... me desculpa. Eu... foi sem querer.

PEDRO
(pega os pedaços do amuleto com as mãos trêmulas)
Isso protegia essa casa. Protegia esta floresta.

Olha pra Bernardo com olhos úmidos

PEDRO
Agora a mata vai ouvir...

BERNARDO
Eu não quis...`,

      `PEDRO
(interrompe, firme)
Vai. Antes que o que você despertou resolva te responder.

Bernardo hesita, mas dá meia-volta e desce os degraus, apressado. Caminha de volta à trilha, com o peso da culpa nos ombros. Ele se afasta pela mata.

PEDRO (OFF)
Ele conseguiu piorar ainda mais a situação. Sérios problemas estão chegando.

Pedro fica parado na varanda, olhando para o céu. Uma nuvem escura, densa, começa a se formar, movendo-se lentamente por entre as copas das árvores... e seguindo o caminho por onde Bernardo foi.

CORTE PARA PRETO.

FLORESTA DENTRO – NOITE.

A noite cai densa sobre a mata. Não há estrelas. Apenas a lua, agora encoberta por nuvens espessas e escuras. O vento sopra forte entre as árvores. O som da floresta foi engolido por um vazio inquietante.

Há passos pesados sobre o solo úmido. É Bernardo. Ele caminha devagar, os olhos vidrados, o corpo tenso como se estivesse sendo guiado por algo que não compreende. Carrega nas mãos um galão de gasolina e uma caixa de fósforos.

Seu rosto está suado, sujo de terra. Os olhos já não são mais os mesmos — há neles um brilho sombrio, como brasas escondidas. O vento passa por ele, agitando as folhas. Uma sombra se movimenta entre as árvores, veloz, como se sussurrasse aos seus ouvidos.

BERNARDO
(voz rouca, quase outra)
Eles nunca entenderam...

Para diante de uma árvore antiga, larga os galões

BERNARDO
Tudo isso precisa acabar...

Com mãos trêmulas, ele abre o galão e despeja o líquido em volta do tronco e nas raízes. Espalha gasolina por arbustos`,

      `secos, troncos tombados. Os sussurros aumentam, em uma língua esquecida. O espírito que o possui alimenta-se do ódio, da raiva, do desequilíbrio.

Ele risca um fósforo. O estalo é pequeno, mas ecoa na mata como um trovão abafado.

BERNARDO
(possesso, murmurando)
Que arda... que arda tudo...

Lança o fósforo ao chão.

Fogo.

As chamas ganham vida rapidamente, lambendo as folhas secas, subindo pelos troncos como serpentes douradas. A luz do fogo dança nos olhos de Bernardo, que assiste tudo em silêncio, como se hipnotizado.

um círculo de árvores em chamas, o fogo se espalhando em várias direções, ganhando força com o vento. Animais fogem desesperados entre os arbustos. O céu se tinge de vermelho e laranja.

Do alto, sobre um galho distante, a CORUJA observa em silêncio. Um grito estridente ecoa da mata — um som que não é humano.

Bernardo cai de joelhos, os olhos revirando. Sua boca se abre como num urro mudo.

CORTE PARA A ESCURIDÃO.

FIM DO EPISÓDIO.`
    ]
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — O Incêndio e a Queda do Guardião',
    summary:
      'O espírito maligno consegue romper as barreiras que o mantinham preso, causando um incêndio devastador que destrói partes da comunidade oculta e espalha o caos entre os animais. Coruja Rasga Mortalha tenta controlar a situação, mas percebe que o dano é maior do que ele pode lidar sozinho. A cidade se divide entre os que tentam conter o fogo e os que procuram refúgio. Caio, um jovem que recentemente descobriu seus poderes mágicos, percebe que a situação está além das suas forças e busca a ajuda de seu avô Pedro, um ex-guardião da comunidade que se transformou em um imenso urso. O Coruja acaba sendo morto.',
    pages: [
      `Rasga Mortalha 2

EPISÓDIO 02

De
Fred Reids`,

      `CORAÇÃO DA FLORESTA / COMUNIDADE OCULTA – NOITE.

O fogo iniciado por Bernardo se espalha pelas bordas da floresta. No centro, um selo antigo, cravado no chão, pulsa em vermelho, como se estivesse tentando conter algo que luta para sair.

De longe, a Xamã Arara corre em direção ao local, acompanhada de dois GUARDIÕES da comunidade, todos com pinturas no rosto e roupas de fibras naturais. Os olhos de Arara brilham com pavor.

ARARA
O selo está enfraquecendo... ele está rompendo!

GUARDIÃO 1
Os animais fugiram do sul da mata, senhora. Dizem que a terra tremeu!

GUARDIÃO 2
O fogo... ele não se move como um fogo comum...

Uma explosão de luz escura irrompe do chão. As pedras ancestrais tremem. A terra racha ao redor do selo. De dentro, um rugido profundo ecoa, fazendo os guardiões caírem de joelhos, tapando os ouvidos. A própria floresta parece gritar.

O espírito liberta-se com uma rajada de vento escuro, repleta de cinzas e brasas. Ele se ergue, libertando-se da prisão.

ESPÍRITO
(ecoando, voz distorcida, grave)
Eles queimaram as raízes... mataram a seiva... quebraram o pacto...

ARARA
Espírito, retorne ao teu sono! Ainda há equilíbrio, ainda há memória viva nesta terra!

ESPÍRITO
Não! O elo foi desfeito... a dor da mata é minha vingança!`,

      `Ele solta um grito que parece um trovão explodindo debaixo da terra.

CORTA PARA:

As chamas se aproximam rapidamente. Barracas, hortas, casas simples de madeira e palha são engolidas pelas labaredas. Pessoas gritam, correm, tentam apagar o fogo com baldes, mas o vento é forte e o fogo parece inteligente, desviando, cercando, dominando.

Animais — macacos, antas, tamanduás — correm desesperados entre as pessoas. A confusão é total. A natureza está em colapso.

GUARDIÃO 1
(gritando)
Retirem os anciãos! Levem as crianças para o rio!

ARARA
(erguendo os braços ao céu, tentando invocar proteção)
Espíritos da água, da pedra, da brisa — ouçam minha súplica! Ajudem-nos a conter a fúria libertada!

A chuva não vem. O fogo avança. O espírito maligno voa sobre as copas das árvores, sua silhueta distorcendo tudo ao redor. Onde passa, o verde vira cinza, a madeira vira carvão.

No alto de uma árvore, a Coruja observa, soltando um canto lúgubre, como um aviso de morte iminente.

ARARA
(olhando para o céu, desesperada)
Pedro... se me ouves... o artefato caiu... e com ele, as barreiras caíram também!

Plano aéreo, revelando a destruição: o fogo desenha uma espiral negra sobre o coração da mata. A comunidade luta, mas está sendo vencida. O caos reina.

CORAÇÃO DA FLORESTA / NOITE.`,

      `A fumaça cobre o céu. O fogo dança entre as árvores como uma entidade viva. Os galhos estalam, folhas incendeiam-se como se clamassem por socorro. Em meio ao caos, a Coruja voa em círculos sobre a clareira em chamas. Suas asas cortam o ar com força. Seus olhos brilham de forma sobrenatural — ela está em sua forma animal, mas consciente do perigo.

Ela pousa sobre um galho grosso. Fecha os olhos e solta um canto agudo, antigo, um chamado para as forças da floresta. O som reverbera como um eco mágico. A mata responde: ventos sopram, pequenos focos de fogo se apagam ao redor. Mas não é suficiente.

A coruja bate as asas com força, alçando voo novamente. Em movimentos rápidos, ela mergulha sobre os galhos em chamas e bate as asas com violência para tentar conter o avanço do fogo. Algumas labaredas se apagam, mas o calor é intenso e novas chamas brotam como feridas abertas.

A Coruja pousa, arfando. Seus olhos observam a devastação. A câmera se aproxima: vemos tristeza em seu olhar. Ela solta um último canto, mais fraco, como um pedido de socorro.

CORUJA
(pensamento, em voz-off)
A mata geme... e eu não sou mais suficiente... o espírito escapou... e agora, o mundo dos homens deve decidir.

CORTA PARA:

NA CIDADE / NOITE.

Na cidadezinha próxima à floresta, o céu também está coberto de fumaça. A névoa escura paira sobre telhados, ruas e postes. Um som distante de sirenes mistura-se a gritos e passos apressados.

Moradores correm, alguns com baldes, outros apenas com sacolas ou filhos no colo. O ar está denso, difícil de respirar.

Em frente a praça da cidade, um grupo de moradores tenta se organizar. Pedro está entre eles, comandando como pode.

PEDRO`,

      `(gritando)
Quem conseguir pegar água no poço, faça isso agora! Mantenham baldes circulando! O vento mudou, temos pouco tempo!

UMA SENHORA COM CRIANÇA NO COLO
Pedro, o fogo já chegou nas trilhas do Norte! A gente precisa fugir!

PEDRO
(firme, mas aflito)
Quem quiser fugir, vá! Mas eu nasci aqui! Eu não vou ver essa terra virar cinza sem lutar!

Alguns assentem, corajosos. Outros recuam, assustados.

Em uma rua ao lado, o Prefeito e alguns Empresários — entre eles, os dois que vieram com Bernardo à mata — debatem ao lado de um carro com motor ligado.**

PREFEITO
Isso tá fora de controle! Precisamos tirar as famílias agora! Quem tiver carro, leve quem puder!

EMPRESÁRIO 1 (NERVOSO)
A gente devia ter previsto isso... essa terra é instável... tem coisa estranha acontecendo aí dentro!

EMPRESÁRIO 2
(olhando para a mata)
Isso não é só um incêndio... é como se... algo tivesse sido solto.

Enquanto isso, em outro ponto da cidade, jovens voluntários com panos molhados no rosto carregam galões d’água em carrinhos. Um deles, Caio, para por um instante e observa o céu. A Coruja voa sobre ele, como um presságio.

CAIO
(sussurrando, assustado)`,

      `Ele veio... a coruja veio até aqui... Estão precisando da nossa ajuda lá

VOLUNTÁRIO AO LADO
Caio, vambora! O fogo tá descendo o morro!

A cidade se divide. Caio corre para encontrar seu avô.

VARANDA DA CASA DE PEDRO - ENTRADA DA FLORESTA - NOITE.

Caio corre por uma estrada de terra em direção à casa do avô. Ele está suado, ofegante e com os olhos arregalados.

CAIO
(gritando ao longe, ainda correndo)
— Vô! Vô Pedro!

PEDRO
(alerta, andando até o portão)
Caio? O que foi, menino?

CAIO
(chegando, ofegante)
Eu vi o coruja! A Rasga-Mortalha! Ele passou por cima da cidade! Ele... ele tava voando baixo, quase tocando os telhados, como se quisesse dizer alguma coisa!

PEDRO
(tenso)
Isso é um sinal a esse incêndio da floresta

CAIO
Sim! Ele olhou pra mim, vô. Juro que olhou. Como se... como se quisesse que eu seguisse ele! Acho que ele tá pedindo ajuda. Da gente.

Após um breve silêncio, e olhando a floresta, Pedro responde.

PEDRO
Então chegou a hora...`,

      `CAIO
(confuso)
Vamos vô! Eles precisam da gente.

Pedro se vira para Caio com um olhar profundo. Caminha até um velho baú no canto da varanda, o abre, e retira de dentro um colar com uma pedra escura e brilhante. Ele o coloca no pescoço.

PEDRO
(sério)
Tem coisas que a gente carrega por gerações, Caio. E agora... você vai entender.

CAIO
Vô, do que tá falando?

Pedro caminha na direção da floresta, Caio o segue. Eles entram na trilha da mata. Após alguns metros, no meio de uma clareira sombreada por árvores altas, Pedro para. Olha ao redor. Fecha os olhos. Respira fundo.

CAIO
(sussurrando)
Vô?

De repente, o corpo de Pedro começa a emitir uma leve luz dourada. Diante dos olhos de Caio, o velho começa a se transformar: seu corpo se curva, os braços crescem e engrossam, sua pele se reveste de pelos densos e marrons. Em segundos, Pedro assume a forma de um enorme Urso Marrom, de olhar sábio e firme.

CAIO
(chocado, dá um passo para trás)
— M-meu Deus... vô?!

O Urso vira-se para ele e, embora não fale com palavras, sua presença transmite calma e firmeza. Em seus olhos, ainda é Pedro.

CAIO
(assustado, mas fascinado)
O senhor... é um guardião? É por isso que sempre conheceu todos os caminhos?

O Urso inclina levemente a cabeça, como quem confirma. Em seguida, dá meia-volta e começa a caminhar com passos`,

      `firmes pela mata. Caio, ainda impressionado, corre para acompanhá-lo.

CAIO
(em voz baixa, para si mesmo, enquanto caminha ao lado do urso)
A coruja chamou... o vô atendeu... e agora... somos nós.

Pedro e Caio seguem pela trilha estreita que se aprofunda mata adentro, sumindo sob a copa das árvores.

MATA QUEIMADA / TRILHA PARA A CASA DE PEDRO / AMANHECER.

A primeira luz do dia rompe o horizonte, revelando a devastação. Onde antes havia vida, agora há terra enegrecida, troncos queimados e o som abafado de cinzas sendo pisadas. O ar ainda está pesado, com focos de fumaça subindo como fantasmas silenciosos entre os galhos carbonizados.

O caos da noite cedeu espaço ao lamento. A floresta respira com dificuldade, e os poucos sons que ecoam são de dor: o lamento distante de um animal ferido, o farfalhar tímido de folhas resistindo ao calor, o estalo de madeira se partindo.

Pedro e Caio caminham lado a lado, sujos, exaustos, em silêncio. Pedro já está novamente em sua forma humana, embora a gravidade em seu olhar revele o peso do espírito guardião que carrega.

CAIO
(com a voz baixa, quase um sussurro)
Nunca pensei que fosse ver algo assim... A mata... parecia que gritava ontem à noite.

PEDRO
(olhando à frente, sem parar de andar)
E gritou, Caio. Gritou com todas as forças. Só não ouve quem nunca aprendeu a escutar.

Eles seguem pela trilha, que leva até a casa de Pedro. O sol desponta por entre os galhos queimados, lançando`,

      `sombras longas e tristes no chão acinzentado. Ao se aproximarem de uma curva no caminho, Caio para de repente.

CAIO
(engasgando a fala, aponta à frente)
— Vô... olha ali...

Pedro se detém. Ambos fixam o olhar no corpo da Coruja Rasga Mortalha, deitado imóvel sobre o solo queimado, as asas abertas como se envolvessem a própria terra. A penugem branca agora está suja de cinzas, mas seus olhos permanecem serenos, como se ele tivesse escolhido aquele lugar para repousar.

CAIO
(ajoelha-se lentamente, tocando levemente uma das penas)
Ele... ele morreu?

PEDRO
(chegando ao lado do neto, baixa a cabeça)
Morreu como viveu. Protegendo e guiando.

Caio abaixa a cabeça. Um silêncio profundo envolve os dois. Nenhum som humano. Apenas o mundo natural, ferido, em luto. Um vento leve sopra, mexendo as folhas queimadas e agitando suavemente as asas da coruja morta.

FIM DO EPISÓDIO.`
    ]
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — O Sacrifício Escolhido',
    summary:
      'Caio e Pedro lamentam a morte do Coruja. Eles encontram a Arara ferida, e a ajudam. Pedro conta a Arara que o artefato foi quebrado. Arara conta que o incêndio foi proposital e que o espírito maligno está solto. Caio conta que o Coruja está morto. Arara diz que é preciso encontrar novos elementos para vencer o espírito maligno e prendê-lo novamente, e que nesse ritual é preciso o sacrifício de alguém.',
    pages: [
      `Rasga Mortalha 2

EPISÓDIO 03

De
Fred Reids`,

      `TRILHA PERTO DA CASA DE PEDRO / AMANHECER.

Caio está ajoelhado, com as mãos apoiadas no chão ao lado do corpo. Seus olhos estão marejados, a voz embargada. Pedro permanece de pé, em postura respeitosa, mas com o olhar carregado de pesar.

CAIO
(baixinho, quase sem fôlego)
Ele... ele sempre esteve por perto. Guardando esse lugar.

PEDRO
(com a voz baixa e grave)
Ele não era só guardião da floresta... Era parte dela.

CAIO
(tocando com delicadeza uma das asas da coruja)
A gente devia ter conseguido salvar ele...

PEDRO
(ajoelha-se ao lado do neto)
Não, Caio. A gente conseguiu o que ele queria: proteger o que ainda podia ser salvo. Mas alguns espíritos... eles escolhem partir no momento certo. E ele partiu como viveu. Lutando.

CAIO
(se engasga um pouco com as palavras)
Não sei se tô pronto pra isso, vô. Pro que a floresta precisa. Pro que eu vi essa noite.

PEDRO
(olha fundo nos olhos do neto)
Ninguém nasce pronto. Nem mesmo o Coruja. Mas ele te escolheu, porque sabia que você poderia ajudar. Voou sobre você... pediu ajuda. Isso não se esquece. Isso se honra.

CAIO`,

      `(desviando o olhar para o corpo da ave)
Ele parecia eterno... Como se nada pudesse derrubá-lo...

PEDRO
(suspira, e diz com ternura)
Os eternos também caem, meu filho. Mas quando caem... viram raiz. Viram vento. Viram memória.

Os dois permanecem em silêncio por alguns segundos. O vento sopra novamente, como um sussurro entre as árvores queimadas. Um pássaro distante canta, tímido, como se testasse a paz do amanhecer.

CAIO
(em voz quase inaudível)
Descanse, Coruja. A gente vai continuar.

PEDRO
(com um aceno solene de cabeça)
Que seu voo siga além das nuvens, velho amigo. Precisamos agora, filho, encontrar a Arara.

Eles então decidem ir atrás da Xamã Arara, seguem caminhando de volta a floresta.

FLORESTA QUEIMADA / TRILHA ENTRE AS CINZAS / MANHÃ.

Pedro e Caio caminham atentos entre as cinzas, os rostos cansados, os olhos vermelhos da fumaça e da tristeza.

Ao contornarem um tronco parcialmente queimado, ouvem um gemido fraco, quase imperceptível. Um sussurro de dor misturado ao farfalhar das folhas chamuscadas.

Caio ergue a mão, fazendo sinal para o avô parar. Ambos olham para o chão e encontram a Xamã Arara, caída entre raízes expostas. Sua forma humana está ferida, a pele marcada por arranhões e fuligem. Um de seus braços está enfaixado com folhas grossas queimadas nas bordas.

CAIO
(ajoelhando-se rapidamente ao lado dela)`,

      `Vô! É a Arara... Ela tá viva, mas machucada.

PEDRO
(se abaixando com cuidado, tocando a testa dela)
Xamã. É bom encontra-la viva em meio a todo esse caos em nossa floresta.

ARARA
(abrindo os olhos lentamente, com dificuldade)
Pedro... Caio... A mata... ela chorou tanto... Eu tentei... tentei conter o fogo... fiz o que pude. Não era só chama... era maldade.

PEDRO
(segura sua mão com firmeza e respeito)
Você fez mais do que qualquer um poderia, Arara. Agora é hora de descansar. Vamos cuidar de você.

CAIO
(segurando o braço dela com cuidado)
A gente vai te levar pra casa do vô. Lá tem água, ervas... você vai ficar bem.

PEDRO
(para Caio)
Ajuda com os ombros. Devagar... isso. Não podemos deixar que o espírito dela se apague com dor.

CAIO
(erguendo cuidadosamente o corpo de Arara)
Eu vou leva-la para a nossa casa. E cuidaremos de você lá.

PEDRO
(com um olhar distante, firme)
É melhor irmos para a queda d'águas. Lá ela poderá se recuperar melhor.`,

      `Caio e Pedro seguem por dentro da floresta levando Arara até a queda d'água.

CORAÇÃO DA FLORESTA / AO PÉ DA QUEDA D’ÁGUA / MEIO DA MANHÃ.

A mata ferida guarda ainda a memória da noite anterior. O som da água que despenca das pedras ecoa como uma canção de alívio e lamento. Nesse refúgio sagrado, escondido do caos, Pedro e Caio repousam Arara sobre uma pedra larga, coberta por musgo úmido.

Ela respira com dificuldade, os cabelos molhados, a pele riscada por fuligem e feridas. Caio prepara uma infusão com ervas frescas que encontrou nas margens do riacho. Pedro segura um pequeno recipiente de barro, recolhendo água da nascente.

CAIO
(oferecendo a infusão morna a Arara)
Bebe devagar. Isso vai ajudar a dor.

ARARA
(engole com esforço, respirando fundo logo depois)
Obrigada… Aqui… aqui ainda há vida. A nascente não foi tocada.

PEDRO
(ajoelhado ao lado dela)
Por pouco. Mas queremos entender, Arara. O que houve? Como o fogo começou?

ARARA
(fecha os olhos por um instante, depois os abre, firmes apesar do cansaço)
Não foi acidente. Foi invocação.

CAIO
(assustado)
Invocação? Quer dizer... alguém fez isso de propósito?

ARARA`,

      `(assente, tentando se sentar com esforço)
Sim. O espírito maligno... Ele foi libertado. E usou alguém que não entende o equilíbrio, que não respeita as leis da terra.

PEDRO
(o semblante se fecha)
Bernardo…

ARARA
(confirma com um olhar dolorido)
Ele carregava inquietação. A energia ao redor dele tremia. E quando o artefato se quebrou... o selo caiu.

CAIO
(olhando para o avô)
O artefato que ele derrubou na sua casa, vô…

PEDRO
(fecha os olhos, amargando a lembrança)
Sim! Ele acabou tombando e derrubando o artefato.

ARARA
(com voz fraca)
E agora… o espírito está solto. E ainda mais forte. E ele que vingança.

CAIO
(olha ao redor, preocupado)
Então... ainda não acabou?

ARARA
(segura a mão dele)
Não. A floresta está viva… mas assustada. Os guardiões precisam se reunir. Mesmo que com todo esse caos, precisamos unir forças para vencer o espírito.

Arara repousa um pouco, mas algo a incomoda.

ARARA`,

      `(olhando para o alto)
O Coruja… Ele deveria estar aqui. Onde ele está?

Caio baixa os olhos, o semblante entristece. Ele respira fundo antes de responder, com voz baixa e respeitosa.

CAIO
Arara… O Coruja... se foi.

ARARA
(vira o rosto para ele, como se não compreendesse de imediato)
Como assim… se foi?

PEDRO
(com voz grave e serena)
Ele deu tudo o que tinha. Sobrevoou o incêndio até o fim. Chamou ajuda. Protegeu os últimos recantos da mata… E caiu. Em silêncio.

ARARA
(a voz embargada)
Não… Ele era o mais antigo entre nós… Era a ponte entre os mundos…

CAIO
(segurando a mão dela com cuidado)
A gente o encontrou... perto da nossa casa. Ele parecia... em paz. Mas já não respirava.

ARARA
(fecha os olhos, lágrimas escorrem em meio à fuligem em seu rosto)
Ele não devia ter partido assim.

PEDRO
(tocando o ombro dela com respeito)
Ele sentiu que era hora de entregar as asas. De confiar nos que ficam.

ARARA`,

      `(olha o céu por entre as árvores queimadas)
Que os ventos o levem em voo eterno... E que o espírito da mata nunca esqueça seu nome.

CAIO
(sussurrando)
Coruja Rasga Mortalha…

Silêncio. Um momento de reverência. A queda d’água parece chorar junto com eles. A névoa envolve os três como um manto de luto. Nenhuma palavra é dita. Apenas o som da natureza tentando respirar de novo.

FADE OUT.

FLORESTA / AO PÉ DA QUEDA D’ÁGUA / NOITE.

A noite cai com suavidade sobre a floresta. As estrelas começam a pontilhar o céu limpo, e a lua crescente reflete nas águas da queda d’água.

Pedro e Caio caminham em silêncio até o local sagrado. Lá, Arara os aguarda. Está de pé, de frente para a queda, com os braços cruzados e o semblante firme. Seus ferimentos estão curados. Há uma nova força em sua postura — como se estivesse pronta para o que virá.

PEDRO
(aproximando-se, com um leve aceno)
Você parece melhor.

ARARA
(sem se virar)
A água curou o corpo. Agora falta curar o que ficou do outro lado do fogo.

CAIO
(cauteloso)
Você chamou a gente aqui por causa disso?

ARARA
(virando-se, com o olhar determinado)`,

      `Sim. É hora de agir. O espírito maligno não vai parar. Ele está se alimentando daquilo que perdeu forma… do que ficou queimado, desfeito, esquecido.

PEDRO
(assentindo)
Precisamos prendê-lo de novo. Selar o que foi rompido.

ARARA
(caminha em direção aos dois)
Mas não podemos refazer o artefato antigo. O selo de antes era feito com elementos que não existem mais. Agora… precisamos de novos. Três elementos vivos: Raiz do tempo. Cinza da memória. E o sangue do vínculo.

CAIO
(franze o cenho)
Sangue do quê?

ARARA
(olha diretamente para ele)
Do vínculo. Do elo mais forte que resta entre este mundo e o espírito. É o último ingrediente. E… precisa ser oferecido com verdade. Um sacrifício.

Silêncio. Caio arregala os olhos, como se tentasse entender as entrelinhas. Engole seco. Dá um passo para trás, incerto. Não diz uma palavra, mas seu corpo expressa o temor.

PEDRO
(olha para o neto com um pesar sereno)
Nem tudo se ensina com palavras, menino. Algumas verdades só se revelam quando o tempo quer.

CAIO
(murmura, sem encará-los)
Sacrifício... alguém vai ter que...`,

      `ARARA
(com suavidade, mas firmeza)
É o preço para trazer equilíbrio. O espírito não teme força. Mas respeita o que é entregue com dor.

Caio abaixa a cabeça. O som da queda d’água cresce ao fundo.

PEDRO
(se aproxima do neto, colocando a mão em seu ombro)
Hoje você ouviu mais do que podia entender. Mas sua alma… já sabe.

A lua ilumina os rostos sérios e silenciosos dos três. Um vento leve sopra entre as folhas acima, como um sussurro ancestral.

ARARA
(olhando para o alto)
A floresta escolhe seus guerreiros. Mas também escolhe quem deve ser o sacrifício. E você Caio, você é o sacrifício.

Caio arregala os olhos, tentando entender as palavras da Xamã.

FIM DO EPISÓDIO.`
    ]
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — Os Três Elementos e a Revelação',
    summary:
      'Caio, Arara e Pedro seguem para um lugar ainda mais secreto na floresta para encontrar os elementos. Bernardo possuído pelo espírito maligno luta contra Arara. Pedro se transforma em Urso e prende Bernardo. Arara conta a Caio que a morte do Coruja foi porque ele deixou de ser um guardião e se tornou apenas um animal. Arara, Pedro e Caio conseguem os elementos e fazem o ritual. Caio fica sabendo que ele terá que se sacrificar para se tornar o guardião, e a sua força é que será usada para prender o espírito maligno.',
    pages: [
      `Rasga Mortalha 2

EPISÓDIO 04

De
Fred Reids`,

      `PROFUNDEZAS DA FLORESTA / CAMINHO SECRETO – NOITE.

Caio, Pedro e Arara seguem por uma trilha quase invisível, que se abre apenas quando Arara toca em galhos específicos ou sussurra palavras antigas. Ramas se afastam. O solo pulsa sob os pés como um tambor distante.

Arara caminha à frente, em silêncio, sentindo o caminho com as mãos. Pedro vem atrás, atento. Caio segue por último, tentando disfarçar a inquietação.

ARARA
Estamos quase lá. O coração da floresta fica além da ponte de raízes.

CAIO
Eu não sabia que isso existia… É como se a floresta mudasse de pele aqui dentro.

PEDRO
Porque muda mesmo. Só quem carrega o chamado consegue enxergar esse caminho.

ARARA
E só quem está disposto a pagar o preço… consegue atravessá-lo.

Eles chegam a uma ponte feita de raízes trançadas sobre um abismo. Do outro lado, uma clareira iluminada por fungos brilhantes e árvores milenares. Ao centro, uma pedra circular coberta de musgo pulsa levemente. Arara pisa primeiro na ponte, em silêncio. Os outros seguem com cuidado. Ao atravessarem, um novo mundo se revela. O som de batimentos ecoa na mata, como se a floresta tivesse um coração vivo.

ARARA
(ajoelhando-se junto à pedra)
Aqui. O primeiro elemento repousa sob a Pedra do Tempo.

CAIO
Raiz do tempo…

PEDRO
(ajoelhando-se ao lado dela)`,

      `É preciso delicadeza. Se arrancar à força, ela morre.

Arara toca a pedra com ambas as mãos. A pedra se abre suavemente como uma flor, revelando uma raiz dourada e espiralada, que brilha em tom âmbar. Ela a retira com reverência.

ARARA
Primeiro elemento.

Eles seguem por entre árvores altas até uma clareira tomada por cinzas. Arara se ajoelha e pega um punhado, deixando escorrer entre os dedos.

ARARA
Cinza da memória. Aqui onde tudo foi perdido… Guardamos o que precisa ser lembrado.

CAIO
(ajoelha ao lado dela, pegando um pouco da cinza)
É leve… mas parece carregar um peso.

PEDRO
Porque carrega. Cada lembrança tem um custo.

Os três se olham. Agora falta o último elemento. O mais difícil.

Caio evita o olhar de Arara e Pedro. Ele sente o coração acelerar. O som da floresta muda — fica mais silencioso, como se até os grilos se calassem.

ARARA
(se levanta, com os dois elementos nas mãos)
Agora só falta o sangue do vínculo. E todos sabem o que isso significa.

CAIO
(após um longo silêncio, sussurrando)
A floresta… já escolheu, não é?

PEDRO`,

      `(em voz baixa)
Ela sempre escolhe.

Os três ficam parados diante de um tronco seco, onde o ritual será iniciado em breve. De repente, Bernardo surge com olhos negros e expressão deformada, possuído pelo espírito maligno.

BERNARDO
(possesso, voz grave, distorcida)
Você não pode me impedir, criatura da terra… Essa floresta agora é minha.

ARARA
Você não pertence a este mundo. Volte para onde nunca deveria ter saído!

O espírito avança. Arara traça um círculo no ar e cria uma barreira de energia que o impede de tocá-la. Mas a força de Bernardo é brutal. Com um grito sobrenatural, ele rompe parte da barreira. Arara recua. Ela gira o cajado e invoca raízes que saem do chão e tentam prender os pés de Bernardo.

Ele se liberta com violência, fazendo as raízes voarem pelos ares.

BERNARDO
(com ódio)
Você é forte, Xamã… Mas não é o bastante.

ARARA
(ofegante, encarando-o)
Eu não estou sozinha.

Um rugido profundo corta a mata. Bernardo vira o rosto a tempo de ver algo gigantesco saltando da escuridão. Um Urso colossal avança, com os olhos brilhando em dourado. É Pedro, transformado, tomado por fúria ancestral.

Ele atinge Bernardo com uma patada que o arremessa contra uma árvore. O espírito dentro de Bernardo grita. Pedro avança novamente e o segura com as patas dianteiras, pressionando-o contra o solo.

ARARA
(grita para o urso)`,

      `Pedro! Agora! Contenha-o com o laço do espírito!

Arara corre e desenrola um colar feito de raízes encantadas e pedra lunar. Ela o lança sobre o corpo de Bernardo, e o laço se prende automaticamente, emitindo uma luz azul intensa. Bernardo grita, debatendo-se. Aos poucos, sua forma começa a se contorcer, o espírito maligno tentando escapar, mas sendo puxado de volta para dentro.

O rosto de Bernardo retorna ao normal por alguns segundos. Ele olha, chorando.

BERNARDO
(voz humana, fraca)
O que… eu fiz…?

PEDRO
(ainda como urso, com olhar pesaroso)
Você não estava mais aqui, meu filho…

Com um último lampejo de luz, o espírito é aprisionado dentro do colar. O corpo de Bernardo desmaia. Pedro se afasta. Aos poucos, volta à forma humana, exausto.

ARARA
(olhando o colar que pulsa lentamente)
Conseguimos por enquanto. Mas o espírito ainda vive aqui dentro.

PEDRO
(ajoelhado, ofegante)
Ele tentou resistir. Precisamos fazer o ritual o quanto antes. Esse colar não vai segurar o espírito por muito tempo.

ARARA
Vamos deixar o rapaz aqui. Ele ficará desacordado. É o tempo em que faremos o ritual para prender o espírito maligno.

PEDRO
Ele não se lembrará de nada! Vamos seguir o caminho e fazer o ritual.`,

      `Eles seguem o caminho dentro do coração da floresta, com os elementos que encontraram. Eles deixam Bernardo adormecido.

ARARA
Caio, eu preciso te contar algo.

Caio se aproxima da Arara enquanto caminha.

ARARA
O Coruja morreu porque se sacrificou ao deixar a sua forma humana. Abriu mão de ser um guardião e se tornou apenas um animal, e foi com essa forma que conseguimos prender o espírito maligno. Ele sabia que tinha chegado a sua hora, porque um novo guardião surgiria.

PEDRO
A floresta já tinha escolhido.

CLAREIRA SECRETA NA FLORESTA.

Arara, Pedro e Caio estão ajoelhados em um círculo desenhado com pó de ervas e terra sagrada. Ao centro, repousam os elementos coletados: raiz do tempo e as cinzas da memória.

Caio, silencioso, observa cada gesto. O vento sopra suavemente, como se a própria floresta estivesse assistindo.

ARARA
(solene, olhos fechados)
Guardião do céu, guardião da terra, Escutem nosso chamado. Derramem sobre nós a força do tempo. Que a verdade se una ao sangue, E o sacrifício dê forma ao selo.

Pedro e Caio observam em silêncio, enquanto Arara canta em língua ancestral, num tom baixo e grave, que faz o ar vibrar. O clima é denso. A floresta parece prender a respiração.

ARARA`,

      `(interrompendo o canto, voltando-se para Caio)
O ritual está quase completo. A floresta nos deu a raiz que vê o passado e o futuro… E nos confiou as cinzas daqueles que já guardaram este mundo. Agora… só falta o último elemento. O mais valioso de todos.

CAIO
(confuso, franzindo o cenho)
Qual é esse elemento, Arara?

PEDRO
(dando um passo à frente, voz firme)
É você, meu neto. O sacrifício… é você.

CAIO
(assombrado, recuando um passo)
O quê? Como assim? Não, eu sei que eu sou o sacrifício, mas não entendi ainda o que vai acontecer.

ARARA
A floresta escolhe. Ela sente quem tem o espírito certo para renascer como Guardião. O Coruja Rasga Mortalha caiu… Mas sua essência vive, e precisa de um novo corpo. Você foi tocado por ela, Caio. Desde o dia em que ouviu o chamado no céu.

CAIO
(respirando fundo, abalado)
Mas… eu sou… Não sou um guardião, não sou especial…

PEDRO
(colocando a mão no ombro de Caio)`,

      `Eu também achei isso um dia. Mas você tem algo que nem eu tive: a conexão com o futuro.

ARARA
Você não morrerá, Caio. Você vai renascer. O sacrifício é da sua forma… Do que você conhece como “você”. Para que a floresta possa ter um novo protetor.

CAIO
(olhando para os dois, em choque, quase sussurrando)
Eu vou… me tornar o Coruja?

PEDRO
Sim. Você será o olhar que atravessa a noite… O grito que avisa a chegada do fim… E o guardião entre os mundos.

Caio permanece imóvel, com os olhos fixos no avô e na Xamã Arara. Uma brisa levanta as folhas ao redor. O tempo parece suspenso.

FIM DO EPISÓDIO.`
    ]
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — O Renascimento e o Voo do Guardião',
    summary:
      'O ritual acontece e Caio vira uma Coruja. Ele tem uma batalha de energia contra o espírito maligno e consegue prendê-lo e liberta Bernardo. Arara conta a Caio sobre a missão dele de guardar a floresta e a comunidade oculta onde vivem os animais e seres mágicos. Pedro e Caio voltam para casa com um novo artefato. A Arara com a ajuda de outros seres mágicos restauram a comunidade oculta. Bernardo é preso pelo incêndio. Caio vai até a floresta e se transforma na Coruja, ele sobrevoa a floresta e solta um grito.',
    pages: [
      `Rasga Mortalha 2

EPISÓDIO 05

De
Fred Reids`,

      `CLAREIRA SAGRADA / NOITE PROFUNDA

Caio respira fundo. Seus olhos passeiam pelo círculo, pelas raízes, pelas cinzas, pelo céu. O silêncio pesa. Ele finalmente dá um passo à frente.

CAIO
Eu aceito.

Arara levanta lentamente a cabeça, como quem ouve uma resposta que esperava. Pedro fecha os olhos por um instante, emocionado. A brisa se intensifica.

ARARA
Caio, filho da mata e da memória, você será o novo guardião. Aquele que vê entre os véus, que voa sobre a morte e anuncia a vida. Que os antigos o recebam.

PEDRO
Lembre-se de quem você é… e de quem precisa se tornar. A floresta vive em você.

Caio se posiciona ao centro do círculo. As cinzas começam a girar ao seu redor, como uma espiral viva. A raiz do tempo solta um brilho intenso e ramos começam a se enroscar suavemente nos pés de Caio. Ele não resiste. Fecha os olhos.

ARARA
Coruja Rasga Mortalha… desperta em teu novo corpo. Leva consigo a sabedoria, a coragem e o lamento dos que já partiram. Sê luz na escuridão.

Uma luz branca explode no centro. O corpo de Caio é erguido no ar. Sua forma humana começa a se dissolver em pontos de luz, penas surgem em seu lugar, as asas se formam. Um canto ancestral ecoa pela floresta, saindo da boca de Arara.

Caio se contorce no ar, envolto em energia. Um grito seco corta o vento — o grito de uma ave de rapina. Subitamente, o que antes era um jovem garoto, agora é uma coruja de olhos profundos e plumagem escura como a noite, marcada por uma mancha branca sobre o peito em forma de lua crescente.`,

      `A nova Coruja pousa suavemente no chão. Olha para Arara. Ela sorri, os olhos úmidos.

ARARA
Você nasceu para isso.

Pedro caminha até a nova forma do neto, ajoelha-se diante dele.

PEDRO
Eu te reconheço, Guardião. E me orgulho.

A Coruja abre lentamente as asas, depois as recolhe. Olha para o céu. A lua parece mais próxima.

CORTE PARA O PRETO.

CLAREIRA ESCURA / AMANHECER NEBULOSO.

A névoa rasteja entre os troncos da mata. O silêncio é tenso. Arara caminha à frente, firme, com o novo artefato envolto em um tecido feito de cipós e penas. Pedro segue ao lado, atento. Caio, agora na forma da Coruja Rasga Mortalha, voa baixo, silencioso, com os olhos atentos à energia do lugar.

Eles se aproximam do local onde deixaram Bernardo. O corpo dele ainda está desacordado, encolhido entre raízes. De repente, um vento gélido sopra contra os três.

Bernardo abre os olhos. Estão completamente negros.

ESPÍRITO MALIGNO
(através de Bernardo)
Vieram terminar o que começaram?

PEDRO
Não… viemos libertar quem você tomou.

Arara estende o novo artefato. Ele vibra em suas mãos, luz dourada escapando pelas frestas do tecido.

ESPÍRITO MALIGNO
Vocês acham que esse novo guardião será suficiente? Ele é jovem… e tolo.`,

      `A Coruja pousa diante de Bernardo. Seus olhos brilham intensamente. Um círculo de vento se forma ao redor dos quatro.

ARARA
Caio, agora é a sua hora. Conduza a luz. Traga o equilíbrio.

A Coruja ergue as asas. Uma aura branca começa a se formar ao seu redor. O espírito maligno, através de Bernardo, grita. O corpo de Bernardo se contorce, a energia escura tenta escapar, formar tentáculos no ar.

PEDRO
Caio, concentra! Você é o olho entre os mundos!

A luz da Coruja se intensifica. Um feixe sai do peito da ave e atinge o corpo de Bernardo. O espírito maligno grita com uma voz múltipla e distorcida.

ESPÍRITO MALIGNO
EU NÃO VOLTAREI!

CAIO
(em pensamento, voz reverberada)
Você pertence ao silêncio… ao esquecimento.

A Coruja voa em espiral ao redor de Bernardo. Cada volta puxa mais e mais da energia sombria para fora do corpo. Arara abre o artefato. Um redemoinho de luz se forma dentro dele, como se sugasse a escuridão.

A sombra do espírito maligno, agora separada do corpo de Bernardo, tenta fugir, mas as asas de Caio, em pleno voo, criam uma barreira de luz. Não há saída.

Com um grito final, a sombra é tragada pelo artefato, que se fecha sozinho, selado por raízes vivas. Tudo fica em silêncio.

Bernardo cai no chão, desacordado. Pedro corre até ele, o segura.

PEDRO
Está vivo… voltou.

Caio pousa suavemente ao lado. Arara envolve o artefato com cuidado.`,

      `ARARA
Está feito.

Bernardo começa a despertar. Ele abre os olhos, agora limpos, confusos.

BERNARDO
O… o que aconteceu? Onde… estou?

PEDRO
Você foi tocado pela escuridão, Bernardo… mas está livre agora.

Bernardo olha ao redor, sem entender. Repara na coruja parada ao lado. Seus olhos se enchem de lágrimas, como se alguma parte dele entendesse.

BERNARDO
Onde estou?

A Coruja apenas o encara em silêncio, firme e sábio.

PEDRO
Está tudo bem, Bernardo.

A cena termina com o trio observando o nascer do sol filtrando-se pelas árvores. A luz toca o rosto de Caio. Ele ergue o olhar para o céu e voa, desaparecendo entre as copas.

TRILHA NA FLORESTA / MANHÃ.

Caio, em forma humana, caminha ao lado de Pedro e da Arara. O silêncio entre eles é sereno. Ao fundo, pássaros cantam timidamente.

Eles seguem por um caminho conhecido, a trilha que leva à casa de Pedro. Bernardo já não está mais. Partiu ao amanhecer, ainda abalado, mas livre.

ARARA
A floresta vive. E agora… tem um novo guardião.

Caio olha para o céu, depois para as árvores ao redor.

CAIO
Ainda sinto tudo pulsando… como se cada raiz, cada folha, tivesse voz.`,

      `Arara sorri com doçura.

ARARA
Tem mesmo. Você agora carrega a escuta da mata. O tempo vai te ensinar o resto.

Pedro para por um instante, olhando o caminho adiante.

PEDRO
Você vai continuar vivendo conosco, Caio. Mas em breve, vai entender que parte de você já pertence ao invisível.

CAIO
Eu não sei se tô pronto pra tudo isso…

ARARA
Ninguém está quando é chamado. Mas a floresta escolhe com sabedoria. Você viu o que ela perdeu… e o que ainda pode perder.

Eles continuam andando. A casa de Pedro já aparece entre as árvores, com suas madeiras escuras e o pequeno jardim queimado pela fumaça.

ARARA
A comunidade oculta vai precisar de você. Não são só animais. Espíritos antigos… seres encantados… guardiões adormecidos. Todos vão sentir quando o novo protetor assumir seu lugar.

CAIO
Eles vão me aceitar?

ARARA
Alguns vão duvidar. Outros vão testar você. Mas a sua luz… já começou a crescer. E ela vai iluminar o caminho.

Pedro pousa uma mão no ombro do neto.`,

      `PEDRO
Você tem algo que nem o Coruja tinha no começo. Amor por tudo isso aqui, mesmo antes de entender o que era.

Caio sorri, com os olhos marejados. Ele olha para a mata, como se visse muito além do que está diante dele.

CAIO
Então eu fico. Por eles. Por nós. Pela floresta.

Arara fecha os olhos e respira fundo, como se abençoasse aquela decisão silenciosamente.

ARARA
A floresta não esquece quem a protege. E agora, ela respira aliviada.

Arara se despede ali, sem se aproximar da casa, ela entrega o novo artefato a Caio. A Arara volta para a floresta, se transforma em animal e voa sobre as árvores. Pedro e Caio guardam o artefato e caminham até a varanda da casa.

CÉU SOBRE A FLORESTA / ENTARDECER.

A Xamã Arara, em sua forma animal, voa alto, suas penas vermelhas e azuis reluzindo ao sol. O bater de suas asas corta o silêncio da mata, agora mais serena.

Ela plana com elegância sobre os rastros do incêndio, olhando para os troncos chamuscados, os galhos quebrados e as clareiras abertas. Uma tristeza atravessa seu olhar, mas também há esperança.

A câmera acompanha seu voo até que ela desce suavemente ao centro da comunidade oculta, um vale escondido por encantamentos, agora devastado, mas ainda com vida pulsando sob a terra.

Diversos seres mágicos começam a surgir entre os troncos e folhas. A Arara pousa no meio da clareira e, em silêncio, abre as asas.

De seu peito, uma luz dourada pulsa, irradiando energia. Os seres mágicos a rodeiam e começam a canalizar a mesma energia: a cura da floresta.`,

      `Ramos brotam do solo, flores se abrem nas pedras enegrecidas, o lago volta a brilhar. As casas dos animais e espíritos se reconstroem com cipós, folhas e cantos sussurrados pela natureza.

Arara, agora em forma humana, observa tudo com olhos marejados. Ela fecha os olhos e sussurra uma prece antiga em voz baixa. A terra vibra em resposta.

Ao fundo, uma canção ancestral começa a ecoar, como se a floresta agradecesse. Um novo ciclo começa.

FADE OUT.

FLORESTA. INÍCIO DA NOITE.

Bernardo caminha, desorientado, entre os restos da floresta. Sua roupa está suja, o rosto cansado. Ele olha em volta, atordoado, até que escuta vozes e passos.

VOZES
(fora de cena)
É ele! Foi ele quem provocou tudo isso! Chamem as autoridades! Ele não pode sair impune!

Homens armados e uniformizados surgem por entre as árvores. Bernardo tenta correr, mas tropeça em um galho queimado. Cai de joelhos.

Bernardo levanta as mãos, trêmulo.

BERNARDO
Eu... eu não queria... foi ele... não era eu...

Um dos homens se aproxima com algemas. Outro observa a floresta em silêncio.

GUARDA FLORESTAL
O que você fez é crime, rapaz. Vamos te levar às autoridades.

Bernardo é algemado. Os olhos dele se enchem de lágrimas.

BERNARDO
Eu estava possuído... tinha algo... dentro de mim... Eu não lembro de nada.`,

      `Os guardas o conduzem para fora da floresta. Enquanto ele some entre as árvores, o silêncio volta a dominar o lugar.

CÉU NOTURNO / CASA DE PEDRO.

A lua cheia paira sobre a floresta. Caio, de pé na varanda da casa de seu avô, fecha os olhos. Respira fundo. As palavras de Arara e Pedro ecoam em sua mente.

Sem dizer uma palavra, ele ergue os braços. A transformação acontece lentamente, ele se torna a Coruja Rasga Mortalha.

Silêncio total. A coruja alça voo, cortando o céu com elegância e poder. No alto, solta um grito agudo e profundo, que ecoa por todo o vale.

FIM.`
    ]
  }
];
