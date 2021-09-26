
import { produtos }  from '../produtos.js'

export const produtosId =  produtos.reduce((acc, produto) => {
    acc[produto.id] =  produto
    return acc
}, {})

