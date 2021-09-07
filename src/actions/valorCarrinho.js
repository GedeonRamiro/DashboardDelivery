import { carrinho } from '../State/carrinho.js'


export function valorCarrinho(){
    
    const subTotal = Object.values(carrinho)
        .map((produto) => produto.preco)
        .reduce((acc, preco) => acc + preco, 0)
        console.log(subTotal)

}

