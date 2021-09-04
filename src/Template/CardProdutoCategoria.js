import { produtos }  from '../produtos.js'

const tabBtnView = document.getElementById('categorias-btn')
const cardProdutoView = document.getElementById('card-produto') 

export default function cardProdutoCategoria (event){
 
    const elemnt =  event.target.getAttribute('id')
    if(elemnt === 'categorias-btn') return

    let divCurrent = event.target
    while(divCurrent.nodeName !== 'BUTTON'){
      divCurrent = divCurrent.parentElement
    }

    const btnAction = divCurrent.id

    const TypeBtn = {
        btnTabAll: 'All',
        btnTabBolo: 'Bolo',
        btnTabPizza: 'Pizza',
        btnTabHambúrguer: 'Hambúrguer',
        btnTabPeixe: 'Peixe',
        btnTabFrutas: 'Frutas'
      }[btnAction]


    const categoriaFilter = produtos.filter(produto => {
        const result = TypeBtn === 'All' ? produto.categoria : TypeBtn
        return produto.categoria === result
    })
    
  
    cardProdutoView.innerHTML = ''
    categoriaFilter.map(produto => {
        const div = document.createElement('div')
        div.classList = 'w-40 p-2 text-sm flex flex-col justify-between'
        const img = document.createElement('img')
        img.classList = 'rounded'
        img.setAttribute('src', `${produto.imagem}`)
        const pNome = document.createElement('p')
        pNome.classList = 'uppercase  mt-3'
        pNome.textContent = `${produto.nome}`
        const pDescricao = document.createElement('p')
        pDescricao.classList = 'text-gray-400 font-extralight'
        pDescricao.textContent = `${produto.descricao}`
        const pTempo = document.createElement('p')
        pTempo.classList = 'text-gray-400 font-extralight mt-2'
        pTempo.textContent = `${produto.tempo}`
        const iconTempo = document.createElement('i')
        iconTempo.classList = 'far fa-clock ml-2'
        const pPreco = document.createElement('p')
        pPreco.classList = 'mt-2'
        pPreco.textContent = `${produto.preco}`
        const iconPreco = document.createElement('i')
        iconPreco.classList = 'far fa-money-bill-alt ml-2'
        const btnAdd =  document.createElement('button')
        btnAdd.classList = 'btn-add bg-yellow-400 w-full uppercase pt-2 pb-1 text-xs text-white rounded-sm outline-none'
        btnAdd.setAttribute('data-id', `${produto.id}`)
        btnAdd.textContent = 'ADICIONAR'
       
        pTempo.appendChild(iconTempo)
        pPreco.appendChild(iconPreco)

        div.appendChild(img)
        div.appendChild(pNome)
        div.appendChild(pDescricao)
        div.appendChild(pTempo)
        div.appendChild(pPreco)
        div.appendChild(btnAdd)
        cardProdutoView.appendChild(div)

    })
}

tabBtnView.addEventListener('click', cardProdutoCategoria)
