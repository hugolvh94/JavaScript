// Crie uma função para cada uma das 4 operações aritméticas (soma, subtração, divisão e multiplicação). Depois crie um programa que leia dois números e de acordo com a operação solicitada, chame a função responsável pela operação. 
function somar(a, b) {
    return a + b;
}
function subtrair(c, d) {
    return c - d;
}
function multiplicar(e, f) {
    return e * f;
}
function dividir(g, h){
    return g / h;
}

let resultado = somar(3,7);
alert('A soma é: ' + resultado);

let resultado1 = subtrair(7,3);
alert('A subtração é: ' + resultado1);

let resultado2 = multiplicar(3,7);
alert('A multiplicação é: ' + resultado2);

let resultado3 = dividir(8,2);
alert('A divisão é: ' + resultado3);

let num = parseInt(prompt('Digite o valor de X: '));
let num1 = parseInt(prompt('Digite o valor de Y: '));

let soma = somar(num,num1); alert(soma);
let mult = multiplicar(num,num1); alert(mult);
let sub = subtrair(num,num1); alert(sub);
let div = dividir(num,num1); alert(div);