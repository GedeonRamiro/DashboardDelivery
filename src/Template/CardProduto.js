import { produtos }  from '../produtos.js'

const cardProdutoView = document.getElementById('card-produto') 

export default function cardProduto (){
    
    produtos.map(produto => {
        
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
        pTempo.textContent = `${produto.tempo} min`
        const iconTempo = document.createElement('i')
        iconTempo.classList = 'far fa-clock ml-2'
        const pPreco = document.createElement('p')
        pPreco.classList = 'mt-2'
        pPreco.textContent = `R$ ${produto.preco.toFixed(2)}`
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



/* <section class='produtos'>
    <div id='card-produto' class='grid grid-cols-2 gap-4 sm:flex sm:flex-wrap'>
        <div class='w-40 p-2 text-sm'>
            <img src="http://lorempixel.com/500/300/food?1" alt="" class='rounded'>
            <p class='uppercase  mt-3'>Pizza calabresa</p>
            <p class='text-gray-400 font-extralight'>Mussarela, calabresa e cebola, oregano</p>
            <p class='text-gray-400 font-extralight mt-2'><i class="far fa-clock"></i> 30 min</p>
            <p class='mt-2'><i class="far fa-money-bill-alt"></i> R$ 35,00</p>
            <button class='bg-yellow-400 w-full uppercase pt-2 pb-1 text-xs text-white rounded-sm outline-none'>ADICIONAR</button>
        </div> 
    </div>
</section> */
