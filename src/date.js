import {produtos} from './produtos.js'

export const agrupadoPorId = produtos.reduce((acc, produto) => {
    acc[produto.id] = produto
    return acc
}, {})

