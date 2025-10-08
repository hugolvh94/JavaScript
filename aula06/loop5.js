// Utilize um loop for para exibir todos os números ímpares de 1 a 15. 
let i = 0;
while (i<=15) {
    if (i % 2 !=0) {
        console.log(i);
    }
    i++;
}

console.log('-=-=-=-=-=-=-=-=-=-=-=-=');

for (let y = 0; y <= 15; y++) {
    if (y % 2 !=0) {
        console.log(y);
    }
}

console.log('-=-=-=-=-=-= usando do while -=-=-=-=-=-=-=-=-=-');
let x = 0;
do {
    if (x % 2 !=0) {
        console.log(x);
    }
    x++
} while (x <= 15);