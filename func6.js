// Crie uma Função que Informa o Mês pelo Número e retorna o mês por escrito.
function retornaMes(mes) {
    let nomeMes;
    switch (mes) {
        case 1: nomeMes = 'Janeiro'; break;
        case 2: nomeMes = 'Fevereiro'; break;
        case 3: nomeMes = 'Março'; break;
        case 4: nomeMes = 'Abril'; break;
        case 5: nomeMes = 'Maio'; break;
        case 6: nomeMes = 'Junho'; break;
        case 7: nomeMes = 'Julho'; break;
        case 8: nomeMes = 'Agosto'; break;
        case 9: nomeMes = 'Setembro'; break;
        case 10: nomeMes = 'Outubro'; break;
        case 11: nomeMes = 'Novembro'; break;
        case 12: nomeMes = 'Dezembro'; break;
        default: nomeMes = 'Número inválido';
    }
    return nomeMes
}
let mes = parseInt(prompt('Digite o número equivalente ao mês:'));
let nome = retornaMes(mes);
alert(nome);