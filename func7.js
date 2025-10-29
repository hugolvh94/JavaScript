// Crie uma Função que Calcula e informa Média de Notas (2 notas) de um aluno.
function cmedia(nt1, nt2) {
    return (nt1+nt2) / 2;
}
let nota1 = parseFloat(prompt('Nota1:'));
let nota2 = parseFloat(prompt('Nota2:'));
let media = cmedia(nota1, nota2);
alert('A média é: ' + media);