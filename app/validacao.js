function validacaoChute (chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (intervaloCorreto(numero)) {
        elementoChute.innerHTML += 
        `<div>Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML =
        `   
            <h2>Você acertou!</h2> 
            <h3>O número secreto era <span class="precisao">${numeroSecreto}</span></h3>

            <button id="jogar-novamente" class="botao-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        if (numero - numeroSecreto > 300) {
            elementoChute.innerHTML +=
            `
            <div>Passou longe! O número secreto é <span class="precisao">muito menor</span></div>
            `
        } else {
            elementoChute.innerHTML +=
            `
            <div>Quase! O número secreto é <span class="precisao">menor</span></div>
            `
        }
    } else {
        if (numeroSecreto - numero > 300) {
            elementoChute.innerHTML +=
            `
            <div>Passou longe! O número secreto é <span class="precisao">muito maior</span></div>
            `
        } else {
            elementoChute.innerHTML +=
            `
            <div>Quase! O número secreto é <span class="precisao">maior</span></div>
            `
        }
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function intervaloCorreto(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})