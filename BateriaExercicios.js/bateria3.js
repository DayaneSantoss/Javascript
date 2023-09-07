/* 
Relembrando: busque resolver os exercícios apenas com as 
informações fornecidas acima da linha "Dica:". 

Leia as dicas apenas se precisar. 
*/

/*
01

Ao abrir o console do navegador, você verá que o console.log 
abaixo está exibindo false. 

Para que true seja exibido, você só precisa fazer 2 pequenos 
ajustes dentro da função. Os ajustes devem ser feitos dentro 
da função, não mexa em nada no console.log.

Faça os 2 pequenos ajustes e verifique se true foi exibido.

Após fazer true ser exibido, remova o console.log do código.

Dica: 

Ajuste 1: exporte o valor que está dentro da função.
Ajuste 2: modifique o tipo do valor que está sendo 
exportado.
*/

function y () {
    return 7
  }
  
  console.log(y() === 7)
  
  /*
  02
  
  Declare uma variável contador e atribua o número um a ela. 
  */
  
  let cont = 1
  
  /*
  03
  
  Crie uma função multiplicaContador que faz a variável 
  contador receber o resultado de contador multiplicado 
  por cem.
  
  Use o operador abreviado para fazer a reatribuição.
  */
  
  const multiplicaContador = () => cont *= 100
  
  console.log(multiplicaContador())
  /*
  04
  
  Crie uma função divideContador que faz a variável 
  contador receber o resultado de contador dividido 
  por quatro.
  
  Use o operador abreviado para fazer a reatribuição.
  */
  
  const divideContador = (num) => num /= 4
  
  console.log(divideContador())
  /*
  05
  
  Crie uma função incrementaContador que incrementa o contador 
  em um.
  
  Use o operador de pré incremento.
  */
  
    const incrementaContador = () => ++cont

    console.log(incrementaContador())
  
  /*
  06
  
  Crie uma função decrementaContador que decrementa o contador 
  em um.
  
  Use o operador de pré decremento.
  */
  
  const decrementaContador = () => --cont
    
    console.log(decrementaContador())
  
  /*
  08
  
  Crie uma função pegaSetenta que retorna um objeto com uma 
  propriedade numero que armazena o número setenta.
  */
  
  const pegaSetenta = () => {
    return {numero: 70}}
  
  console.log(pegaSetenta().numero )
  /*
  09
  
  Use o retorno da função pegaSetenta para comparar se o valor 
  da propriedade numero é maior ou igual a contador.
  */
  
  console.log(pegaSetenta().numero >=  cont )

  
  /*
 
  13
  
  Crie uma função pegaNumeros que exporta os números 34, 
  95 e 37.
  
  Dica:
  
  Use uma estrutura de lista.
  */
  
  const pegaNumeros = () => {
    return [34,95,70]
  }
  console.log(pegaNumeros())
  /*
  14
  
  Use o retorno da função pegaNumeros para comparar se o valor 
  do terceiro número do array é diferente de contador.
  */

 console.log(pegaNumeros()[2] !== cont)