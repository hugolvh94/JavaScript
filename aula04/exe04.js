let idade = parseInt(prompt('Informe de 1 à 4 a categoria da idade '));

switch (idade) {
    case 1: document.write('Criança'); break;
    case 2: document.write('Adolescente'); break;
    case 3: document.write('Adulto'); break;
    case 4: document.write('Idoso'); break;
    default: document.write('Categoria não encontrada');
}