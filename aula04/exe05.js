let categoria = parseInt(prompt('Informe um número de 1 à 4 para escolher a categoria:'));

switch (categoria) {
    case 1: document.write('Alimento perecível'); break;
    case 2: document.write('Bebida'); break;
    case 3: document.write('Limpeza'); break;
    case 4: document.write('Higiene pessoal'); break;
    default: document.write('Categoria não encontrada');
}