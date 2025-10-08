let salario, somasalf = 0, somasalm = 0, qtdf = 0, qtdm = 0;
let controle = 'continua', sexo;
while (controle != 'fim') {
    salario = parseFloat(prompt('informe o salário:'));
    sexo = prompt('Informe o sexo:');
    if (sexo == 'f' || sexo == 'F') {
       qtdf++; somasalf += salario;
    } else if (sexo == 'm' || sexo == 'M') {
        qtdm++; somasalm += salario;
    } else {(alert('sexo inválido'));}
    controle = prompt('Deseja continuar? digite fim p sair');
}
document.write('Qtd de mulheres: ' +qtdf+ 'Salários femininos:' +somasalf+ '<br>');
document.write('Qtd de homens: ' +qtdm+ 'Salários masculinos:' +somasalm+ '<br>');
document.write('Média dos salários:' +((somasalf+somasalm)/(qtdf+qtdm)));  
