const btnAvancar = document.querySelector(".btn-avancar");
const btnVoltar = document.querySelector(".btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

function mostarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function() {
    if (cartaoAtual == cartoes.length - 1) return;
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostarCartao(cartaoAtual);      
})

/*
OBJETIVO 2: Quando clicarmos na seta de voltar tem que mostrar o cartão anterior da lista.
Passo 1: Trazer o elemento HTML da seta voltar.
Passo 2: Identificar o clique do usuário na seta voltar.
Passo 3: Fazer aparecer o cartão anterior da lista.
Passo 4: Tirar a classe selecionado do cartão anterior.
*/
btnVoltar.addEventListener("click", function() {
    if (cartaoAtual == 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--
    mostarCartao(cartaoAtual);    
})