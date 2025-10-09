let idade, somaqtdmaior = 0;
for (let i = 1; i <= 10; i++) {
    idade = parseInt(prompt('Idade?'));
    if (idade >= 18) {
        somaqtdmaior++;
    }
}
document.write('Qntd de maiores:' +  somaqtdmaior);