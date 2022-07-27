import CarrinhoTemplate from '../Template/CarrinhoTemplate.js'
import { carrinho } from '../State/carrinho.js'
import { valorCarrinho } from './valorCarrinho.js'
import { quantidadeItemCarrinho } from '../Template/CarrinhoQuantidadeTemplate.js'

const carrinhoView = document.querySelectorAll('#carrinho')
const [carrinhoTemplate, carrinhoModalTemplate] = carrinhoView


function decrementaQuantidade (event){

    const element = event.target
    if(!element.classList.contains('btn-decrementar')) return

    const produto = carrinho[element.getAttribute('data-produto-id')]
    
    if(produto.quantidade <= 1) return

    produto.quantidade > 1 ? --carrinho[produto.id].quantidade : ''

    CarrinhoTemplate()
    valorCarrinho()
    quantidadeItemCarrinho()
} 

function incrementaQuantidade (event){

    const element = event.target
    if(!element.classList.contains('btn-incrementar')) return
    
    const produto = carrinho[element.getAttribute('data-produto-id')]
   
    ++carrinho[produto.id].quantidade
    
    CarrinhoTemplate()
    valorCarrinho()
    quantidadeItemCarrinho()

}


carrinhoTemplate.addEventListener('click', decrementaQuantidade)
carrinhoModalTemplate.addEventListener('click', decrementaQuantidade)

carrinhoTemplate.addEventListener('click', incrementaQuantidade)
carrinhoModalTemplate.addEventListener('click', incrementaQuantidade)

export const quantidadeCarrinho = {
    incrementaQuantidade,
    decrementaQuantidade

}

