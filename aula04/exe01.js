// Dias da semana
let dia = parseInt(prompt('Digite de 1 a 7 para um dia da semana:'));

switch (dia) {
    case 1: document.write('Domingo'); break;
    case 2: document.write('Segunda-Feira'); break;
    case 3: document.write('Terça-Feira'); break;
    case 4: document.write('Quarte-Feira'); break;
    case 5: document.write('Quinta-Feira'); break;
    case 6: document.write('Sexta-Feira'); break;
    case 7: document.write('Sábado'); break;
    default: document.write('Dia não encontrado');
}