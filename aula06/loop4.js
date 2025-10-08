// Crie um programa que utilize um loop while para exibir os números de 1 a 20 na tela. 
let i = 1;
while (i<20) {
    console.log('contando com while', i);
    i++ // aumentando o valor de i
}

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');

for (let i = 1; i <=20; i++) {
    console.log('contando com for..', i)
}

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-'); 

let y = 1; 
do { 
    console.log('contando com do while..', y);  
    y++; 
} while (y<=20); 