const nome = 'Dennis'
const concatenacao = 'Olá ' + nome + '!'
const templete = `
    Olá
    ${nome}!`
console.log(concatenacao, templete)


//Expressoes..

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase() //funcao
console.log(`Ei.. ${up('cuidado')}!`)