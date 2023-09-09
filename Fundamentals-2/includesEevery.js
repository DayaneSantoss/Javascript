// retorn bollean 
// verifica se tal valor está incluso no array
// apenas valores primitivos
// nao em array, objeto, funcao

const numeros = "pipoca nao tem "

console.log(numeros.includes('pipoca')) 


// every
// checa se todos os itens de um array correspondem a uma condiçao

const strings = ["1", "1", 1]

const results = strings.every(string => string === "1") //false

console.log(results)
