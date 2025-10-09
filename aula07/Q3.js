let preco, mpreco = 0;
for (let i = 0; i < 5; i++) {
    preco = parseInt(prompt('Preço:'));
    if (mpreco < preco) {
        mpreco = preco;
    }
}
document.write('O maior preço é: ', mpreco);