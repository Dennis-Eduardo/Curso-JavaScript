const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Checar se é inteiro

const prova1 = 9.323
const prova2 = 6.856

const total = prova1 * peso1 + prova2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //casa pós vírgula
console.log(media.toString(2)) //conversão binário
console.log(typeof media) // tipo