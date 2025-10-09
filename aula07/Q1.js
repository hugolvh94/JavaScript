let numero = parseInt(prompt('Digite um número:'));
while (numero != 0) {
    if ((numero % 2) == 0) {
        alert('Número par.');
    } else {
        alert('Número ímpar.');
    }
    numero = (parseInt(prompt('Digite o número <0 para sair>')));
}