
const jonas = [
    'Jonas',
    'Schmendtmann',
    1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
]

//  Looping de tras para frente

// 0,1,2...4
// 4,3,2..0

for(let i = jonas.length - 1; i >= 0; i--){
  console.log(i,jonas[i])
}

// fazer três repetiçoes de tres exercicios na academia 

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`______Starting exercise ${exercise}`)

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise: ${exercise} Lifting weight repetition ${rep}`)
    }
}


// while loop

let rep = 1
while(rep <= 10){
    console.log(`Lifting weight repetition ${rep}`)
    rep++
}


let  dice = Math.trunc(Math.random() * 6) + 1

while(dice !== 6){
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1
    if(dice === 6) console.log('Loop is about to end')
}

// Challenge

// Vamos melhorar ainda mais a calculadora de gorjetas do Steven, desta vez usando loops!

// Suas tarefas:

// Crie uma matriz chamada contas contendo todos os 10 valores de contas de teste.
// Crie matrizes vazias para as gorjetas e os totais (gorjetas e totais)
// Use a função calcTip que escrevemos antes (incluída no código inicial) para calcular gorjetas e valores totais (fatura + gorjeta) para cada valor de nota na matriz de contas. Use um loop for para realizar os 10 cálculos!

// DADOS DE TESTE: 22, 295, 176, 440, 37, 105, 10, 1100, 86 e 52.

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52]
let totals = []
let tips = []

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }

for (let i = 0; i < bills.length; i++){
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(bills[i] + tip)

}
console.log(bills, tips, totals)



// BÔNUS:

// Escreva uma função calcAverage que recebe um array chamado arr como argumento. Esta função calcula a média de todos os números no array fornecido. Este é um desafio DIFÍCIL (não fizemos isso antes)! Veja como resolver isso se você quiser:


const calcAverage = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(calcAverage([22, 259, 176]))

// Primeiro, você precisará somar todos os valores do array. Para fazer a adição, comece criando uma soma variável que comece em 0. Em seguida, faça um loop sobre o array usando um loop for. Em cada iteração, adicione o valor atual à variável sum. Dessa forma, ao final do loop, você terá todos os valores somados.

// Para calcular a média, divida a soma calculada anteriormente pelo comprimento do array (porque esse é o número de elementos).

// Chame a função com o array de totais.

// 👋 OPCIONAL: Você pode assistir minha solução em formato de vídeo na próxima palestra