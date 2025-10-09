let num, somanum = 0
for (let i = 0; i < 10; i++ ) {
    num = parseInt(prompt('Número:'));
    somanum += num;
}
document.write('Média: ', somanum / 10);