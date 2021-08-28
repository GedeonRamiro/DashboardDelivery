import {json} from './json.js'

export const agrupadoPorId = json.reduce((acc, produto) => {
    acc[produto.id] = produto
    return acc
}, {})

