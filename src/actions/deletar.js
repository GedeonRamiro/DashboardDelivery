import CarrinhoTemplate from '../Template/CarrinhoTemplate.js'
import { carrinho } from '../State/carrinho.js'
import { valorCarrinho } from './valorCarrinho.js'

const carrinhoView = document.querySelectorAll('#carrinho')
const [carrinhoTemplate, carrinhoModalTemplate] = carrinhoView

export function deletarItemCarrinho (event){

   if(!event.target.classList.contains('btn-delete')) return
  
    let buttonCurrent = event.target
    while(buttonCurrent.nodeName !== 'BUTTON'){
        buttonCurrent = buttonCurrent.parentElement
    }
 
    const produto = carrinho[buttonCurrent.getAttribute('data-produto-id')]
    
    carrinho[produto.id].quantidade = 0
    delete carrinho[produto.id]
   
    CarrinhoTemplate()
    valorCarrinho()

}


carrinhoTemplate.addEventListener('click', deletarItemCarrinho)
carrinhoModalTemplate.addEventListener('click', deletarItemCarrinho)


