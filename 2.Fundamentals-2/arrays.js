const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
// array nao é um valor primitivo entao pode mudar os valores em const
const friends = ["Michael", "Steven", "Peter"];
console.log(friends)

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[1])
// ultimo elemento
console.log(friends[friends.length - 1])

// substituir elementos
friends[2] = 'Jay'
console.log(friends)
// friends = ["Bob","Alice "]  X

const firstName = "Jonas"
const Jonas = [firstName, "Schemdtamn", 2037 - 1991, friends]
console.log(Jonas)

// Exercise 

// Nao tem como fazer  operaçoes com arrays
const calcAge = function(birthYeah){
    return 2037 - birthYeah
}
const years = [1990, 1967, 2002, 2010, 2018]


// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length - 1])

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages)

// Methods in array

// adicionar no final do array - push
const bestFriends = ["Michael", "Steven", "Peter"]
bestFriends.push("Jay")
console.log(bestFriends)

// adicionar ao inicio do array - unshift
friends.unshift("John")
console.log(friends)

// remover elementos 
friends.pop( ) //final
console.log(friends)

friends.shift( ) //inicio
console.log(friends)


// indexOf - retorna o indice do elemento
console.log(friends.indexOf("Steven"))
console.log(friends.indexOf("Bob"))

// includes - se é false or true (igualdade estrita) - condicionais

console.log(friends.includes("Steven"))
console.log(friends.includes("Bob"))

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven")
}
// Exercise
// Steven quer que você melhore sua calculadora de gorjetas, usando as mesmas regras de antes – gorjeta de 15% da conta se o valor da conta estiver entre 50 e 300, e se o valor for diferente, a gorjeta será de 20%.

// Suas tarefas:

// Escreva uma função calcTip que receba qualquer valor de conta como entrada e retorne a gorjeta correspondente, calculada com base nas regras acima (você pode conferir o código do primeiro desafio da calculadora de gorjetas se precisar). Use o tipo de função que você mais gosta. Teste a função usando um valor de fatura de 100.

const calcTip = entrada => {
    return entrada >= 50 && entrada <=300 ? entrada * 0.15 : entrada * 0.20
}

// calcTip(100)

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals)


// E agora vamos usar arrays! Portanto, crie um array chamado bills contendo os dados de teste abaixo.

// Crie um array chamado dicas contendo o valor da gorjeta de cada nota, calculado a partir da função que você criou anteriormente.

// BÔNUS: Crie um array de totais contendo os valores totais, ou seja, conta + gorjeta.

// DADOS DE TESTE: 125, 555 e 44.