let x = Number(prompt('Atribua um valor para X para realizar as operações y = x * 80 e q = y + x:'));
let y = (x * 80);
let q = (y + x);

if (q >= 0 && Number.isInteger(q)) {
    document.write('<br>Q pertence aos Naturais.');
    document.write('<br>Os valores correspondem a: ', q); 
} else if (q < 0 && Number.isInteger(q)) {
    document.write('<br>Q pertence aos Inteiros.');
    document.write('<br>Os valores correspondem a: ', q);
} else if (!Number.isInteger(q)) {
    document.write('<br>Q pertence aos Racionais.');
    document.write('<br>Os valores correspondem a: ', q);
} 