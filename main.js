const botoes = document.querySelectorAll('.botao');
const abasConteudo = document.querySelectorAll('.aba-conteudo-item');

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener('click', function() {
        const indice = this.getAttribute('data-indice');

        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove('ativo');
            abasConteudo[j].remove('ativo');
        }
        this.classList.add('ativo');
        abasConteudo[indice].classList.add('ativo');
        atualizarContador(abasConteudo[indice]);
    });
}

function atualizarContador(abaConteudo){
    const contador = abaConteudo.querySelector('.contador');
    const tempoObjetivo = new Date (abaConteudo.getAttribute('data-tempo-objetivo'));
    contador.textContent = calculaTempo(tempoObjetivo);
}

function calculaTempo(tempoObjetivo){
    const tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor (segundos / 60);
    let horas = Math.floor (minutos / 60);
    let dias = Math.floor (horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + 'dias' + horas + 'horas' + minutos + 'minutos' + segundos + 'segundos'; 
}
