
import { carrinho } from '../State/carrinho.js'

//const carrinhoView = document.getElementById('carrinho')

const carrinhoView = document.querySelectorAll('#carrinho')
const [carrinhoTemplate, carrinhoModalTemplate] = carrinhoView


export default function CarrinhoTemplate(){
    carrinhoTemplate.innerHTML = ''
    carrinhoModalTemplate.innerHTML = ''
    Object.values(carrinho).map(produto => produto).map(produto => {

        const {id ,imagem, nome, preco, quantidade} = produto
        const precoQuantidade = preco * quantidade
        
        const divCarrino = document.createElement('div')
        divCarrino.classList = 'grid grid-cols-4 my-4'
     
        const divItem = document.createElement('div')
        divItem.classList = 'grid grid-cols-2 col-span-3'
    
        const img = document.createElement('img')
        img.classList = 'rounded w-32'
        img.setAttribute('src', `${imagem}`)
        const divInfoItem = document.createElement('div')
        divInfoItem.classList = 'pl-2'
        const pNome = document.createElement('p')
        pNome.classList = 'ml-2'
        pNome.textContent = `${nome}`
    
        const divQuantidade = document.createElement('div')
        divQuantidade.classList = 'flex justify-between items-center border w-16 rounded-lg'
        const btnDecrementa = document.createElement('button')
        btnDecrementa.classList = 'btn-decrementar px-1 text-2xl outline-none' 
        btnDecrementa.textContent = '-'
        btnDecrementa.setAttribute('data-produto-id', `${id}`)
     
        
        const quantidadeSpan = document.createElement('span')
        quantidadeSpan.textContent = `${quantidade}`
        const btnIncrementa = document.createElement('button')
        btnIncrementa.classList = 'btn-incrementar px-1 text-xl outline-none'
        btnIncrementa.textContent = '+'
        btnIncrementa.setAttribute('data-produto-id', `${id}`)
    
        const divPreco = document.createElement('div')
        divPreco.classList = 'text-right btn-add'
        const pPreco = document.createElement('p')
        pPreco.textContent = `R$ ${precoQuantidade.toFixed(2)}`
        const btnIcon = document.createElement('button')
        btnIcon.classList = 'btn-delete outline-none btn-delete'
        btnIcon.setAttribute('data-produto-id', `${id}`)
       
        const icon = document.createElement('i')
        icon.classList = 'btn-delete far fa-trash-alt'
        
    
        btnIcon.appendChild(icon)
        divPreco.appendChild(pPreco)
        divPreco.appendChild(btnIcon)
    
        divInfoItem.appendChild(pNome)
        divInfoItem.appendChild(divQuantidade)
      
    
        divQuantidade.appendChild(btnDecrementa)
        divQuantidade.appendChild(quantidadeSpan)
        divQuantidade.appendChild(btnIncrementa)
    
        divItem.appendChild(img)
        divItem.appendChild(divInfoItem)
        
        divCarrino.appendChild(divItem)
        divCarrino.appendChild(divPreco)

        const div_clone = divCarrino.cloneNode(true)
        
        carrinhoTemplate.appendChild(div_clone)
        carrinhoModalTemplate.appendChild(divCarrino)
    
    })
      
}

/* 
<h3 class='text-xl font-semibold'>Meu carrinho</h3>
    <div class='grid grid-cols-4 my-4'>
        <div class='grid grid-cols-2 col-span-3'>
            <img src="http://lorempixel.com/500/300/food?1" alt="" class='rounded w-32'>
            <div class='pl-2'>
                <p class='ml-2'>Pizza calabresa</p>
                <div class='flex justify-between items-center border w-16 rounded-lg'>
                    <button class='px-1 text-xl outline-none'>-</button>
                    <span>2</span>
                    <button class='px-1 text-xl outline-none'>+</button>
                </div>
            </div>
        </div>    
        <div class='text-right '>
            <p> R$ 35,00</p>
            <button class='outline-none'> <i class="far fa-trash-alt"></i></button>
        </div>
    </div> 
*/





