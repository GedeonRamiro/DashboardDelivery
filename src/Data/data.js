
import { produtos }  from '../produtos.js'
import { carrinho } from '../State/carrinho.js'

export const produtosId =  produtos.reduce((acc, produto) => {
    acc[produto.id] =  produto
    return acc
}, {})

console.log('date: ', carrinho)