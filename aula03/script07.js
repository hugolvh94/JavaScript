let nota1 = parseFloat(prompt('Informe a nota1:'));
let nota2 = parseFloat(prompt('Informe a nota2'));
let media = (nota1 + nota2) / 2;

if (media >= 6) {
    document.write('Aprovado');
} else {
    document.write('Reprovado');
}