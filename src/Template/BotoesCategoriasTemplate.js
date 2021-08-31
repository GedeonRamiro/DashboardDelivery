import {produtos}  from '../produtos.js'

const categoriaBtn = document.getElementById('categorias-btn') 


  const categoriaItem = produtos.reduce((acc, produto) => (
        [
            ...acc,
            {categoria: produto.categoria, icon: produto.icon}
        ]
        .filter((produto, index, array) => (
           index === array.findIndex(item => item.categoria === produto.categoria)
        ))
         
  ), []);


export default function menuCategorias(){

    const div = document.createElement('div')
    div.classList = 'mr-4'

    const btnAll = document.createElement('button')
    btnAll.classList = 'flex justify-center items-center rounded py-1 px-2 outline-none bg-yellow-300 shadow-md'
    btnAll.setAttribute('id', 'btn-tab-All')
    const iconAll = document.createElement('i')
    iconAll.classList = 'fas fa-utensils'
    const categoriaAll = document.createElement('p')
    categoriaAll.classList = 'ml-2 pt-1'
    categoriaAll.textContent = 'All'

    
    btnAll.appendChild(iconAll)
    btnAll.appendChild(categoriaAll)
    div.appendChild(btnAll)
    
    categoriaBtn.appendChild(div)
    
    categoriaItem.map(produto => {
        const div = document.createElement('div')
        div.classList = 'mr-4'
        
        const btn = document.createElement('button')
        btn.classList = 'flex justify-center items-center rounded py-1 px-2 outline-none'
        btn.setAttribute('id', `btn-tab-${produto.categoria}`)
        const icon = document.createElement('i')
        icon.classList = `${produto.icon}`
        const categoria = document.createElement('p')
        categoria.classList = 'ml-2 pt-1'
        categoria.textContent = `${produto.categoria}`


        btn.appendChild(icon)
        btn.appendChild(categoria)
        div.appendChild(btn)

        categoriaBtn.appendChild(div)
        
    })
}

/* 
<section class='tab-button'>
<div class='flex overflow-x-auto'>
   <!--  <div id='all-bnt'>
        <div class='mr-4'>
            <button class='flex justify-center items-center bg-yellow-300 rounded shadow-md py-1 px-2 outline-none'>
                <i class="fas fa-utensils"></i>
                <p class='ml-2 pt-1'>All</p>
            </button>
        </div>
    </div> -->
    <div id='categorias-btn' class='flex text-base md:text-lg mb-2'>
      <!--   <div class='mr-4'>
            <button class='flex justify-center items-center rounded py-1 px-2 outline-none'>
                <i class="fas fa-hamburger"></i>
                <p class='ml-2 pt-1'> Hamburger</p>
            </button>
        </div>
        <div class='mr-4'>
            <button class='flex justify-center items-center rounded py-1 px-2 outline-none'>
                <i class="fas fa-fish"></i>
                <p class='ml-2 pt-1'> Peixe</p>
            </button>
        </div>
        <div class='mr-4'>
            <button class='flex justify-center items-center rounded py-1 px-2 outline-none'>
                <i class="fas fa-apple-alt"></i>
                <p class='ml-2 pt-1'> Frutas</p>
            </button>
        </div>
        <div class='mr-4'>
            <button class='flex justify-center items-center rounded py-1 px-2 outline-none'>
                <i class="fas fa-pizza-slice"></i>
                <p class='ml-2 pt-1'> Pizza</p>
            </button>
        </div>
        <div class='mr-4'>
            <button class='flex justify-center items-center rounded py-1 px-2 outline-none'>
                <i class="fas fa-cheese"></i>
                <p class='ml-2 pt-1'> Bolo</p>
            </button>
        </div> -->
    </div>
</div>
</section> */