let nota1 = Number(prompt('Nota do primeiro trimestre: '));
let nota2 = Number(prompt('Nota do segundo trimestre: '));
let nota3 = Number(prompt('Nota do terceiro trimestre: '));
let nota4 = Number(prompt('Nota do quarto trimestre: '));
let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log('O aluno Victor teve a sua média = ', media);

if (media >= 7) {

    console.log('Aprovado!');

} else {
    
    console.log('Reprovado!');

}    

  