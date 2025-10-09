let salario = parseInt(prompt('Digite o valor do salário:'));
let vt = salario * 6 / 100;
let inss;

if (salario < 2500) {
    inss = salario * 8 / 100;
} else {
    inss = salario * 11 / 100;
}

document.write('Desconto do V.T: ', vt);
document.write('<br>');
document.write('Desconto do INSS: ', inss);