var btn = document.getElementById('btn');

function converterMoneda() {

    var caixa = document.querySelector("#text").value
    var res = document.getElementById("resposta")

    if (caixa == "") {

        res.innerHTML = "é necessario preencher a caixa"
    } else {
        verificarRadio()
        historicoDeConversao()
    }
}

function verificarRadio() {
    var caixa = document.querySelector("#text").value
    var radio = document.querySelector('input[name="conv"]:checked')
    var res = document.getElementById("resposta")

    if (radio.value == "RD") {
        let calculo = caixa / 5.06
        res.innerHTML = calculo.toFixed(2).replace('.', ',')
    } else if (radio.value == "DR") {
        let calculo = caixa * 5.06
        res.innerHTML = calculo.toFixed(2).replace('.', ',')
    } else {
        res.innerHTML = "é necessário escolher uma opção!"
    }
}

function historicoDeConversao() {
    var caixa = document.querySelector("#text").value
    var array = []
    array.push(caixa)
    console.log(array)
}

btn.addEventListener('click', converterMoneda)