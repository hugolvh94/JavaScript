let number = Number(prompt('Digite um número de 0 à 100:'));
let multiplicacao = (number * 2);

if (number < 0 || number > 100) {
    document.write('O número é um número inteiro!');
} else if (number >= 0 && number <= 100) {
    document.write('O número é um número Natural');
}

document.write('<br>O resultado é: ' + multiplicacao);