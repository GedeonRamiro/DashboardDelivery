import CarrinhoTemplate from '../Template/CarrinhoTemplate.js'
import { produtosId } from '../Data/data.js'
import { carrinho } from '../State/carrinho.js'
import { valorCarrinho } from './valorCarrinho.js'

const cardProdutoView = document.getElementById('card-produto') 

export function adcionarItemCarrinho (event){
    if(!event.target.classList.contains('btn-add')) return
    
    const element = event.target
   
    const produto = produtosId[element.getAttribute('data-id')]
  
    carrinho[produto.id] = produto
    carrinho[produto.id].quantidade = 1

    CarrinhoTemplate()
    valorCarrinho()
}





cardProdutoView.addEventListener('click', adcionarItemCarrinho)


