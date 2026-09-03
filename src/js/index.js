document.addEventListener("DOMContentLoaded", () => {
    const botoes = document.querySelectorAll(".botao");
    const imagens = document.querySelectorAll(".imagem");
    const informacoes = document.querySelectorAll(".informacoes");
    const btnAnterior = document.querySelector(".seta-anterior");
    const btnProximo = document.querySelector(".seta-proximo");

    let indiceAtual = 0;
    let autoplayInterval = null;
    const TEMPO_AUTOPLAY = 6000;
    const TOTAL = botoes.length;

    function atualizarCarrossel(novoIndice) {
        botoes[indiceAtual].classList.remove("selecionado");
        imagens[indiceAtual].classList.remove("ativa");
        informacoes[indiceAtual].classList.remove("ativa");

        indiceAtual = (novoIndice + TOTAL) % TOTAL;

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
        pararAutoplay();
        autoplayInterval = setInterval(irParaProximo, TEMPO_AUTOPLAY);
    }

    function pararAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }

    function reiniciarAutoplay() {
        iniciarAutoplay();
    }

    // Bolinhas
    botoes.forEach((botao, indice) => {
        botao.addEventListener("click", () => {
            atualizarCarrossel(indice);
            reiniciarAutoplay();
        });
    });

    // Setas
    if (btnProximo) {
        btnProximo.addEventListener("click", irParaProximo);
    }
    if (btnAnterior) {
        btnAnterior.addEventListener("click", irParaAnterior);
    }

    // Teclado
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            irParaProximo();
        } else if (e.key === "ArrowLeft") {
            irParaAnterior();
        }
    });

    // Pausa no hover
    const container = document.querySelector(".container");
    if (container) {
        container.addEventListener("mouseenter", pararAutoplay);
        container.addEventListener("mouseleave", iniciarAutoplay);
    }

    // Inicia autoplay
    iniciarAutoplay();
});
