function verifica(num) {
    let msg;
    if (num > 0) {
        msg = 'Número positivo';
    } else if (num < 0) {
        msg = 'Número negativo';
    } else {
        msg = 'Você digitou 0';
    }
    return msg;
}
let numero = parseInt(prompt('Número'));
let txt = verifica(numero);
alert(txt);