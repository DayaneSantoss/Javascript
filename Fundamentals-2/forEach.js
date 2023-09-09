// forEach é um metodo que vai interar sobre um array, é um loop for  que retorna um callback (percorre cada item do array e para cada item do array vai ser executada uma açao)

// item.forEach((item no singular) = > {açao})

// banda.estaNaAtiva = function(num){
//     let found = false
//     this.generos.forEach(genero => {
//         if (genero.includes(num)) {
//             found = true;
//         }
//     });
//     return found;
// };

// console.log(banda.estaNaAtiva("Hard rock"))


const numeros = [1,2,3]

numeros.forEach((numero) => {
    console.log("numero",numero)
})

numeros.forEach((numero, index, array) => {
    console.log("numero",numero, "index", index, "array", array)
})