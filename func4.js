// Crie uma Função que Calcula o Quadrado de um Número.
function calQuadrado(a) {
    return a**2
}

let resultado = calQuadrado(9);
alert('O quadrado de 9 é: ' + resultado);

let resultado1 = parseInt(prompt('Digite um número:'))
let calculo = calQuadrado(resultado1);
alert('O quadrado de ' + resultado1 + ' é ' + calculo);

