// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

// se tiver o sinal de mais(+) e um Number, o Number é convertido em string
console.log('I am ' + 23 + ' years old');
//se tiver sinal de menos(-) e um Number, todos os strings serão convertidos em number
console.log('23' - '10' - 3);
//se tiver sinal de multiplicaçao ou de divisão a string é convertida em Number
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);