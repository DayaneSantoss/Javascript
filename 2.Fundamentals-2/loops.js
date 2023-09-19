
for (let i = 1; i < 11; i++) {
    console.log('Lifting weights repetition ' + i + ' times')
}

const jonas = [
    'Jonas',
    'Schmendtmann',
    1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]


const types = []

for (let a = 0; a < jonas.length; a++){
    // lendo o array jonas
    console.log(jonas[a])


    // types[a] = typeof jonas[a]
    types.push(typeof jonas[a])
}
// preenchendo a matriz types
console.log(types) //[ 'string', 'string', 'number', 'string', 'object' ]


const years = [1992, 2007, 1949, 2020]

const ages = []

for (let i = 0 ; i < years.length; i++){
    ages.push(2023 - years[i]) 
}
console.log(ages)

// continue and break

console.log('_____ONLY STRINGS_____')
for (let a = 0; a < jonas.length; a++){
    if(typeof jonas[a] !== 'string') continue //verifica se jonas[a] nao é uma string, se for verdadeiro o loop é interrompido
    console.log(jonas[a], typeof jonas[a])

}
console.log(types) //[ 'string', 'string', 'number', 'string', 'object' ]

console.log("______BREAK WITH NUMBER_______")
for (let b; b < jonas.length; b++){
    if (typeof jonas[b] === 'number') break
    console.log(jonas[b], typeof jonas[b])
}