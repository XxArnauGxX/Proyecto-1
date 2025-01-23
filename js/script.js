let edadGato = 0;
let edadHumano = 0;

console.log('GATO' + ' ' + 'HUMANO');
console.log('-----------');

for (edadGato = 1; edadGato < 22; edadGato++) {
    if (edadGato == 1) {
        edadHumano = 15;
    } else if (edadGato == 2) {
        edadHumano = 24;
    } else {
        edadHumano = edadHumano + 4;
    }

    console.log(edadGato + ' ' + edadHumano);
}