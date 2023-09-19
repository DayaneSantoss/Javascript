'use strict'//ativa modo estrito - evita bugs que normalmente ficariam invisiveis e evita o uso de palavras reservadas

// function

function nameCandidate(name1, name2){
  console.log(name1,name2)
  const candidates = `the first candidade is ${name1} and second candidate is ${name2}`
  return candidates
}

let listCandidates = nameCandidate('lucia', 'joao')
console.log(listCandidates)


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration - ela é elevada (hoisted), o que significa que ela pode ser chamada antes da própria definição no código.
const age1 = calcAge1(1991);

function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }

// Function expression - funçao mais flexivel , pois permite que as funçoes sejam tratadas como qualquer outro valor emm javascript . Elas só podem ser chamadas após a declaração no código
  
  // const age2 = calcAge2(1991);   dá ruim 

  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);  
  
  console.log(age1, age2);
  
//tentative

const calculate = function (num){
  return 2037 - num
}
const cal = calculate(20)
console.log(cal)

//   ///////////////////////////////////////
//   // Arrow functions - não obtem palavra-chave
  
  const calcAge3 = birthYeah => 2037 - birthYeah;
  const age3 = calcAge3(1991);
  console.log(age3);
  
  const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  

console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1980, 'Bob'));
  
  
  ///////////////////////////////////////
  // Functions Calling Other Functions
  function cutFruitPieces(fruit) {
    return fruit * 4;
  }
  
  function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
  
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
  }
  console.log(fruitProcessor(2, 3));
   
  
  ///////////////////////////////////////
  // Reviewing Functions
  const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  
  const yearsUntilRetirement2 = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired 🎉`);
      return -1;
    }
  }
  
    console.log(yearsUntilRetirement(1991, 'Jonas'));
    console.log(yearsUntilRetirement(1950, 'Mike'));

  
//   ///////////////////////////////////////
//   // Coding Challenge #1
  
//   /*
// De volta às duas equipes de ginástica, os Golfinhos e os Coalas! Há uma nova disciplina de ginástica, que funciona de forma diferente.
// Cada equipe compete 3 vezes e então a média das 3 pontuações é calculada (ou seja, uma pontuação média por equipe).
// Uma equipe SÓ vence se tiver pelo menos o DOBRAMENTO da pontuação média da outra equipe. Caso contrário, nenhuma equipe vence!
  
// 1. Crie uma função de seta 'calcAverage' para calcular a média de 3 pontuações
// 2. Use a função para calcular a média de ambas as equipes
// 3. Crie uma função 'checkWinner' que tome como parâmetros a pontuação média de cada equipe ('avgDolphins' e 'avgKoalas'), e então registre o vencedor no console, junto com os pontos de vitória, conforme regra acima . Exemplo: "Vitória dos coalas (30 vs. 13)".
// 4. Use a função 'checkWinner' para determinar o vencedor para DADOS 1 e DADOS 2.
// 5. Ignore os draws desta vez.

// DADOS DE TESTE 1: Golfinhos pontuam 44, 23 e 71. Coalas pontuam 65, 54 e 49
// DADOS DE TESTE 2: Golfinhos pontuam 85, 54 e 41. Coalas pontuam 23, 34 e 27

// DICA: Para calcular a média de 3 valores, some todos e divida por 3
// DICA: Para verificar se o número A é pelo menos o dobro do número B, verifique A >= 2 * B. Aplique isso às pontuações médias da equipe 😉
//   GOOD LUCK 😀
//   */

const calcAverage = (point1, point2, point3) => (point1 + point2 + point3) / 3

const scoreDolphins = calcAverage(85, 54,41);
const scoreKoalas = calcAverage(23, 34,27);
console.log(scoreDolphins, scoreKoalas);


const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  }
  else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
  }else{
    console.log(`No one win`)
  }
}
checkWinner(scoreDolphins, scoreKoalas);

