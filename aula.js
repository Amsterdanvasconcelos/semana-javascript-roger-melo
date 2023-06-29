/* 
Map recebe 3 parâmetros (item, index, array)

Quando você deve usar o map:

Quando você precisa obter um novo array, com a mesma
quantidade de itens do array original.

array [1, 2, 3]

Obtenha um novo array com os valores do primeiro array multiplicado por 3.
*/

const numbers = [1, 2, 3]

const doubledNumbers = numbers.map(number => {

    return number * 2
})

/////

const prices = [20, 10, 30, 40, 24, 56, 91]

const salePrices = prices.map(price => price / 2)

/////

const products = [
    { name: 'Mouse Sem Fio', price: 30 },
    { name: 'Pen Drive', price: 25 },
    { name: 'Cartucho de Tinta', price: 50 },
    { name: 'Suporte Ergonômico para Notebook', price: 23 },
    { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => {
    if (product.price >= 30) {
        return {
            name: product.name,
            price: product.price / 2
        }
    }

    return product
})

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/* 
filter recebe (item, index, array)

Quando você deve usar o filter?

Quando você precisa obter um novo array, com uma quantidade
de itens menor que a do array original.

[1, 2, 3] [1, 2]
*/

const randomNumbers = [36, 99, 37, 63] 

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)

/////

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

/* 
reduce pode receber (accumulator, item, index, array)

Quando você deve usar o reduce?

Quando baseado no array original, você precisa "reduzir" o array
a um valor.

[1, 2, 3] -> 6
*/

const numbersNew = [1, 2, 3]

const sumResult = numbersNew.reduce((accumulator, item) => accumulator + item, 0)

/////

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((acc, phaseScore) => {
    if (phaseScore.name === 'Roger Melo') {
        return acc + phaseScore.score
    }

    return acc
}, 0)

console.log(rogerScore);