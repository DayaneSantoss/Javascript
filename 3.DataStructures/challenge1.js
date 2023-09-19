/*
Suponha que obtemos dados de um serviço da web sobre um determinado jogo (abaixo). Neste desafio, vamos trabalhar com os dados. Portanto, aqui estão suas tarefas:
*/

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
  
//   1- Crie uma matriz de jogadores para cada equipe (variáveis 'players1' e 'players2').

const [players1, players2] = game.players

console.log(players1)
console.log(players2)

// 2- O primeiro jogador em qualquer matriz de jogadores é o goleiro e os outros são jogadores de campo. Para o Bayern de Munique (equipe 1), crie uma variável ('gk') com o nome do goleiro e uma matriz ('fieldPlayers') com os outros 10 jogadores de campo restantes.

const [gk, ...fieldPlayers] = players1

console.log(gk, fieldPlayers)

// 3- Crie uma matriz 'allPlayers' contendo todos os jogadores de ambas as equipes (22 jogadores).

const allPlayers = [...players1, ...players2]
console.log(allPlayers)

// 4- Durante o jogo, o Bayern de Munique (equipe 1) utilizou 3 jogadores substitutos. Portanto, crie uma nova matriz ('players1Final') contendo todos os jogadores originais da equipe 1 mais 'Thiago', 'Coutinho' e 'Perisic'.

const players1Final = [...players1, 'Thiago',  'Coutinho', 'Perisic']

console.log(players1Final)

// 5- Com base no objeto 'game.odds', crie uma variável para cada odd (chamadas 'team1', 'draw' e 'team2').

const {team1, x: draw, team2} = game.odds

console.log(team1)
console.log(draw)
console.log(team2)

// 6- Escreva uma função ('printGoals') que recebe um número arbitrário de nomes de jogadores (NÃO em uma matriz) e imprime cada um deles no console, juntamente com o número total de gols marcados (número de nomes de jogadores passados).

const printGoals = (...players) => {
    console.log(players)
    console.log(`${players.length} goals were scored`)
}

printGoals(...game.scored)

// 7- A equipe com a odd mais baixa tem mais chances de vencer. Imprima no console qual equipe tem mais chances de vencer, SEM usar instruções 'if/else' ou o operador ternário.

team1 < team2 && console.log('Team 1 is more likely')
team1 > team2 && console.log('Team 2 is more likely')
