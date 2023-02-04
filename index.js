var btn = document.getElementById('btn');
array = []

function converterMoneda() {

    var caixa = document.querySelector("#text").value
    var res = document.getElementById("resposta")

    if (caixa == "") {
        res.innerHTML = "é necessario preencher a caixa"
    } else {
        verificarRadio()
    }
}

function verificarRadio() {

    var caixa = document.querySelector("#text").value
    var radio = document.querySelector('input[name="conv"]:checked')
    var res = document.getElementById("resposta")

    if (radio.value == "RD") {
        let calculo = caixa / 5.06
        
        res.innerHTML = "Resultado: $" + calculo.toFixed(2).replace('.', ',')
        historicoDeConversao()
    } else if (radio.value == "DR") {
        let calculo = caixa * 5.06

        res.innerHTML = "Resultado: $" + calculo.toFixed(2).replace('.', ',')
        historicoDeConversao()
    } else {
        res.innerHTML = "é necessário escolher uma opção!"
    }
}

function historicoDeConversao() {

    var caixa = document.querySelector("#text").value
    var historico = document.getElementById('historico')

    historico.innerHTML = ""

    array.push(caixa)

    array.forEach(element => {
        historico.insertAdjacentHTML('beforeend', ` <p>$${element.replace('.', ',')}</p>`)

    });
}

btn.addEventListener('click', converterMoneda)