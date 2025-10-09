let camisa = parseFloat(prompt('Informe o valor da camisa:'));
let desconto = camisa * 8 / 100;
let total = camisa - desconto;
document.write('Valor final: ' + total);