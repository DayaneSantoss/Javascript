
// O que é um valor primitivo em JavaScript?
//São todos os tipos, exceto objetos, definem valores imutáveis (ou seja, valores que não podem ser alterados). Por exemplo, Strings são imutáveis.

// replace não modifica string original, pois string é um tipo primitivo. tipos primitivos são imutaveis

const mensagem = 'Oi Seu pai é um cavalo'

// mensagem.replace('cavalo', 'boi')   X

const novaMensagem = mensagem.replace('cavalo', 'boi')

console.log(novaMensagem)


