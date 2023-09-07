/*
Se o exercício não especificou nome do identificador (variável, 
parâmetro, propriedade, função), declare ele com o nome de sua 
preferência. 

Quando um exercício pedir para você criar uma função, escolha 
a forma de declaração de função que você preferir.

Mas arrow function é mais legal 😉
*/

/*
01

Crie uma função que recebe dois parâmetros e retorna o resultado 
da multiplicação deles.
*/

const multiplica = (a , b) => a * b

console.log(multiplica(23, 45))
/*
02

Declare um objeto e armazene-o em uma const.

O objeto deve ter uma propriedade armazenando 7 e outra 
armazenando 3.

Invoque a função que você criou acima e passe como argumentos 
os números do objeto. 

A invocação da função deve retornar 21.
*/
const quantidade = {
    carros: 7,
    motos: 3 
}
const quantCarros = quantidade.carros
const quantMotos = quantidade.motos

console.log(multiplica(quantCarros,quantMotos))


/*
03

Declare um array e armazene-o em uma const.

O array deve ter os itens 5 e 7.

Invoque a função que você criou no exercício 01 e passe como 
argumentos os números do array. 

A invocação da função deve retornar 35.
*/

const numeros = [5, 7]

numeros.forEach(numero =>
    console.log(numero)
)

multiplica(numeros[0],numeros[1])

/*
04

Crie uma função pegaNumerosImpares que retorna um array com os 
números 5, 3 e 9.

Invoque a função que você criou no exercício 01 e passe como 
argumentos os números 3 e 9 do array. 

Não armazene os retornos da invocação de pegaNumerosImpares 
em consts.

A invocação da função que você criou no exercício 01 deve 
retornar 27.
*/
const arrays = [5,10,7,4,3,9,2]
const numerosImpares = []

const pegaNumerosImpares = () => {
    arrays.forEach(array => {
        if (array % 2 !== 0){
            numerosImpares.push(array)
        }
    })
    return numerosImpares
}
console.log(pegaNumerosImpares())



/*
06

Crie uma função pegaRespostasUsuario que retorna um array com os 
itens 'A', 'B', 'A' e 'D'.
*/

const pegaRespostasUsuario = () => ['A', 'B', 'A' ,'D']

/*
07

Crie uma função pegaPontuacao que contém um parâmetro 
respostasUsuario.
Na primeira linha da função, crie uma const que armazena o último 
item do array que você declarou no exercício acima. Armazene o 
item usando o parâmetro respostasUsuario e sintaxe de colchetes. 
Não invoque a função que você criou no exercício anterior. 
Abaixo da const, crie uma let pontuacao que recebe zero. 
Se a const que você declarou na primeira linha da função é igual 
a 'A', atribua a pontuacao o valor que ela tem somado a 50.
Senão, se a const é igual a 'C', atribua a pontuacao o valor que 
ela tem somado a 25.
Senão, atribua a pontuacao o valor que ela tem somado a 100.
Na última linha dentro do bloco da função, retorne pontuacao.
*/

const pegaPontuacao = respostasUsuario => {
    const ultimaResposta = respostasUsuario[3]
    let pontuacao  = 0

    if (ultimaResposta == 'A'){
        pontuacao += 50
    }else if(ultimaResposta == 'C'){
        pontuacao += 25
    }else{
        pontuacao += 100
    }
    return pontuacao
}

/*
08

Crie uma const respostasUsuario que armazena o retorno da 
invocação de pegaRespostasUsuario.

Invoque pegaPontuacao e passe respostasUsuario como argumento.

A invocação de pegaPontuacao deve retornar 100.
*/
const respostasUsuario = pegaRespostasUsuario()
console.log(pegaPontuacao(respostasUsuario))

/*
09

Faça o código da função pegaPontuacao ser imutável. 

Isto é, elimine da função qualquer ocorrência de reatribuição. 

Dicas: 

A palavra-chave return pode ser inserida dentro de bloco de if, 
else if ou else. 

O único requisito para você usar return é ele estar dentro de uma 
função.
*/
const pegaPontuacao2 = respostasUsuario => {
    const ultimaResposta = respostasUsuario[3]

    if (ultimaResposta == 'A'){
        return 50
    }else if(ultimaResposta == 'C'){
        return 25
    }else{
        return 100
    }
}
const respostasUsuario2 = pegaRespostasUsuario()
console.log(pegaPontuacao2(respostasUsuario2))
