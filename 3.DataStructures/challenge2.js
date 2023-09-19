///////////////////////////////////////
// Desafio de codificação nº 2

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };


//   1. Faça um loop no array game.scored e imprima o nome de cada jogador no console, junto com o número do gol (Exemplo: "Meta 1: Lewandowski")

for (const [index, name] of game.scored.entries()){
    console.log(`Goals: ${index + 1}: ${name}`)
}

// 2. Use um loop para calcular a odd média e registre-a no console (já estudamos como calcular médias, você pode verificar se não se lembra)
const odds = Object.values(game.odds)
let num = 0

for (const odd of odds) num += odd 
    num /= odds.length

console.log(num)


// 3. Imprima as 3 probabilidades no console, mas de uma forma bem formatada, exatamente assim:
//        Probabilidade de vitória do Bayern de Munique: 1,33
//        Probabilidade de empate: 3,25
//        Probabilidade de vitória do Borrussia Dortmund: 6,5
// Obtenha os nomes dos times diretamente do objeto do jogo, não os codifique (exceto para "empate"). DICA: Observe como as probabilidades e os objetos do jogo têm os mesmos nomes de propriedades 😉

for (const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'empate' : `vitoria do ${game[team]}`
    console.log(`Probabilidade de ${teamStr}: ${odd}`)
}