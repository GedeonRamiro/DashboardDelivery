import CarrinhoTemplate from '../Template/CarrinhoTemplate.js'
import { carrinho } from '../State/carrinho.js'

const carrinhoView = document.getElementById('carrinho')

 export function decrementaQuantidade (event){
    
    const element = event.target
    if(!element.classList.contains('btn-decrementar')) return

    const produto = carrinho[element.getAttribute('data-produto-id')]
    
    if(produto.quantidade <= 1) return

    produto.quantidade > 1 ? --carrinho[produto.id].quantidade : ''

    CarrinhoTemplate()

} 

export function incrementaQuantidade (event){

    const element = event.target
    if(!element.classList.contains('btn-incrementar')) return
    
    const produto = carrinho[element.getAttribute('data-produto-id')]
   
    ++carrinho[produto.id].quantidade
  
    CarrinhoTemplate()

}


carrinhoView.addEventListener('click', decrementaQuantidade)
carrinhoView.addEventListener('click', incrementaQuantidade)