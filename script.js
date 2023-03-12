window.addEventListener("load", () => {
    document.getElementById("button1").addEventListener("click", imprimePares)
})

let contador = 0
let resultado = ""

function imprimePares() {

    for (let index = 1; index <= 100; index++) {

        resultado = `${resultado + contador},`
        contador = contador + 2
    }

    document.getElementById("resultado1").innerHTML = resultado
}
window.addEventListener("click", () => {
    document.getElementById("button2").addEventListener("click", calcMedia)
})

function calcMedia() {
    const num1 = Number(document.getElementById("input1").value)
    const num2 = Number(document.getElementById("input2").value)
    const num3 = Number(document.getElementById("input3").value)

    let media = (num1 + num2 + num3) / 3
    let resultadoMedia = media

    document.getElementById("resultado2").innerHTML = resultadoMedia
}

window.addEventListener("load", () => {
    document.getElementById("button3").addEventListener("click", calcular)
})

function calcular() {

    const nu1 = Number(document.getElementById("input4").value)
    const nu2 = Number(document.getElementById("input5").value)

    let resultado3 = menorNumero(nu1, nu2)

    document.getElementById("resultado3").innerHTML = resultado3
}

function menorNumero(n1, n2) {

    let numMenor = n1
    if (n2 < n1) {
        numMenor = n2
    }
    return numMenor

}
window.addEventListener("load", () => {
    document.getElementById("button4").addEventListener("click", calc)
})

function calc() {

    const numero1 = Number(document.getElementById("input6").value)
    const numero2 = Number(document.getElementById("input7").value)

    let resultado4 = maiorNumero(numero1, numero2)

    document.getElementById("resultado4").innerHTML = resultado4
}

function maiorNumero(n1, n2) {

    let numMaior = n1
    if (n2 > n1) {
        numMaior = n2
    }
    return numMaior
}

const meuVetor = ["a", "b", "c", "d", "e", "f"]
const retorno = inverterVetor(meuVetor)


function inverterVetor(vetor) {
    let vetorInverso = []

    let sobe = 0
    let desce = vetor.length - 1

    let controle
    while (desce >= 0) {
        vetorInverso.push(vetor[desce])

        sobe++
        desce--
    }

    console.log(vetorInverso)
    console.log(vetor)
    return vetorInverso
}

let teste1 = 5 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let resultadoArray = encontrarNumero(teste1, array)


function encontrarNumero(numX, numeros) {
    /*if (numeros != array) {
        alert(Não é um Número do vetor!)    
    } else {
        
    */
    let numProcurado = numeros.find((user, index, array) => user === numX);
    return (numProcurado)
}

console.log(resultadoArray)