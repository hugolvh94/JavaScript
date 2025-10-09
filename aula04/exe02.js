let number1 = parseFloat(prompt('Informe o valor de X:'))
let number2 = parseFloat(prompt('Informe o valor de Y:'));
let operacao = prompt('Informe o tipo de operação (+,-,*,/):');
let resultado;
switch (operacao) {
    case '+': resultado = number1 + number2; break;
    case '-': resultado = number1 - number2; break;
    case '*': resultado = number1 * number2; break;
    case '/': resultado = number1 / number2; break;
    default: resultado = 'Operação Inválida';
} 

document.write('Resultado:', resultado);