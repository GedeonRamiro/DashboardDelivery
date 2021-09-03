
import { produtos }  from '../produtos.js'


const cardProdutoView = document.getElementById('card-produto') 

export const carrinho = {
    '1acb': {
        id:'1acb',
        nome: 'Bolo chocolate',
        descricao: 'cobertura chocolate e granulado',
        tempo: 10,
        preco: 4.5,
        imagem: "http://lorempixel.com/500/300/food?1",
        icon: 'fas fa-cheese',
        categoria: 'Bolo',
        quantidade: 2
    },
    
    '5ahy': {
        id:'5ahy',
        nome: 'Bolo pão de mel',
        descricao: 'cobertura de brigadeiro gourmet',
        tempo: 7,
        preco: 5,
        imagem: "http://lorempixel.com/500/300/food?6",
        icon: 'fas fa-cheese',
        categoria: 'Bolo',
        quantidade: 3
    },
}


export function adcionarItemCarrinho (event){

    if(!event.target.classList.contains('btn-add')) return
    
    const element = event.target
    console.log(element)
    
    console.log(produtos[element.getAttribute('data-index')])
  
 
  
}

cardProdutoView.addEventListener('click', adcionarItemCarrinho)


