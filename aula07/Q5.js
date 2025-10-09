let nome, idade;
let mVelho = '';
let mIdade = 0;
for (let i = 0; i < 5; i++) {
    nome = prompt('Digite o nome da pessoa ' + (i + 1));
    idade = parseInt(prompt('Digite a idade de ' + nome));

    if (idade > mIdade) {
        mIdade = idade; mVelho = nome;
    }
}
document.write('A pessoa mais velha é:' , mVelho , ' com ' , mIdade, ' anos.');