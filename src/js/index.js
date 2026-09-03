const personagens = [
    {
        nome: "Seiya",
        constelacao: "Pégaso",
        descricao: "Seiya é um cavaleiro impulsivo, generoso, de coração ardente e sincero. Por ser espontâneo e franco, Seiya é, muitas vezes, visto como uma pessoa atrevida e insolente, mas isso se trata de uma impressão errada. Na verdade, Seiya é um dos cavaleiros mais bondosos e justos. Seu senso de justiça e amor aos amigos se mostra durante todas as batalhas. Sua piedade e preocupação se estende até aos inimigos, como visto durante as mortes de Cassius e Siegfried de Doube."
    },
    {
        nome: "Shiryu",
        constelacao: "Dragão",
        descricao: "Calmo e circunspecto, honrado e justo, leal e amigo, são adjetivos que facilmente descrevem Shiryu, que por mais sangrentas sejam as batalhas nas quais se envolve sempre acaba prevalecendo. Seu Cosmo amplia-se cada vez mais graças a essas situações, tornando-o capaz de derrotar poderosos inimigos. De personalidade séria, não teme dar sua vida por uma justa causa. O Cavaleiro de Dragão também é considerado o mais sábio e o mais maduro do quinteto, sendo uma espécie de líder nato que acompanha Saori Kido."
    },
    {
        nome: "Shun",
        constelacao: "Andrômeda",
        descricao: "Ele tem uma personalidade pacífica e odeia lutar, sempre ferido por medo de ferir seus inimigos e sacrificaria sua vida para salvar a dos outros. É o mais nobre dentre os Cavaleiros de Bronze, tem um grande e puro coração, e de fato, verifica-se que Shun é a pessoa com o coração mais puro da terra. Sempre prefere não lutar, porque não quer prejudicar ninguém e prefere só se defender, se possível. Shun está sempre pronto para morrer pelos outros, assim como a sua constelação protetora, Andrômeda."
    },
    {
        nome: "Hyoga",
        constelacao: "Cisne",
        descricao: "Hyoga parece calmo, controlado e distante. Ele possui uma mente rápida e analítica, e é o mais quieto entre os protagonistas. Abaixo da superfície, no entanto, ele é apaixonado, dedicado a seus ideais e extremamente sensível, com emoções sempre no limite. Segundo Kurumada, Hyoga representa mais frieza do que os outros."
    },
    {
        nome: "Ikki",
        constelacao: "Fênix",
        descricao: "Mesmo criança, Ikki era conhecido como o mais forte entre os cem órfãos que treinavam para ser Cavaleiros de Atena. Desde pequeno cuidou de seu irmão mais novo, Shun de Andrômeda, sempre protegendo-o do perigo. A personalidade de Ikki é drasticamente diferente de seus companheiros: é o oposto de seu irmão mais novo Shun que é calmo, suave e carinhoso. Ikki é duro, frio, agressivo e uma pessoa muito distante. Assim como a lendária ave mitológica Fênix, Ikki é um lobo solitário que odeia andar em grupos, mas sempre aparece nas horas mais cruciais para ajudar seus amigos."
    },
    {
        nome: "Athena",
        constelacao: "Deusa da Guerra",
        descricao: "Deusa que preza a guerra estratégica, Atena é calculista nas ações que toma, nunca deixando de priorizar o bem-estar de seus cavaleiros, fazendo-se presente ao lado destes nos momentos mais críticos. Seu amor pela humanidade é evidente, dado o fato da deusa se abster de tomar emprestado um corpo hospedeiro, fazendo questão de se apresentar com um corpo mortal, crescendo e vivendo entre os humanos."
    },
    {
        nome: "Hades",
        constelacao: "Senhor do Submundo",
        descricao: "O Senhor das Trevas concede um corpo físico para as almas mortas, fazendo-as servi-lo como espectros com a promessa de vida eterna. Eles não são seguidores de Hades apenas pela vida eterna, mas sim por acreditarem que o reinado de Hades traria vida eterna a todos. Aqueles que têm um grande apego pela vida acabam caindo na tentação e entrando para o exército de Hades."
    }
];

const botoes = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
const btnAnterior = document.querySelector(".seta-anterior");
const btnProximo = document.querySelector(".seta-proximo");

let indiceAtual = 0;
let autoplayInterval = null;
const TEMPO_AUTOPLAY = 6000;

function atualizarCarrossel(novoIndice) {
    // Remove classes ativas
    botoes[indiceAtual].classList.remove("selecionado");
    imagens[indiceAtual].classList.remove("ativa");
    informacoes[indiceAtual].classList.remove("ativa");

    // Atualiza índice (com loop)
    indiceAtual = (novoIndice + personagens.length) % personagens.length;

    // Adiciona classes ativas
    botoes[indiceAtual].classList.add("selecionado");
    imagens[indiceAtual].classList.add("ativa");
    informacoes[indiceAtual].classList.add("ativa");
}

function irParaProximo() {
    atualizarCarrossel(indiceAtual + 1);
    reiniciarAutoplay();
}

function irParaAnterior() {
    atualizarCarrossel(indiceAtual - 1);
    reiniciarAutoplay();
}

function iniciarAutoplay() {
    autoplayInterval = setInterval(irParaProximo, TEMPO_AUTOPLAY);
}

function pararAutoplay() {
    clearInterval(autoplayInterval);
}

function reiniciarAutoplay() {
    pararAutoplay();
    iniciarAutoplay();
}

// Eventos dos botões (bolinhas)
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        atualizarCarrossel(indice);
        reiniciarAutoplay();
    });
});

// Eventos das setas
btnProximo.addEventListener("click", irParaProximo);
btnAnterior.addEventListener("click", irParaAnterior);

// Navegação pelo teclado
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        irParaProximo();
    } else if (e.key === "ArrowLeft") {
        irParaAnterior();
    }
});

// Pausa autoplay quando o mouse está sobre a área principal
const container = document.querySelector(".container");
container.addEventListener("mouseenter", pararAutoplay);
container.addEventListener("mouseleave", iniciarAutoplay);

// Inicia
iniciarAutoplay();
