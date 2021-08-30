import {produtos}  from '../produtos.js'

const categoriaBtn = document.getElementById('categorias-btn') 


const categoriaIcon = produtos.map(produto => {
    return {categoria: produto.categoria, icon:produto.icon}
})

const categoriaItem = categoriaIcon.filter((acc, produto, array) => {
    return array.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(acc)) === produto
});



//console.log(categoriaItem)


/*  const result = produtos.reduce((unico, item) => {
    return unico.includes(item.categoria) ? unico : [...unico, item.categoria, item.icon]
    
}, []);

 console.log(result)  */



export default function menuCategorias(){
    
    categoriaItem.map(produto => {
        const div = document.createElement('div')
        div.classList = 'mr-4'
        const btn = document.createElement('button')
        btn.classList = 'flex justify-center items-center rounded py-1 px-2 outline-none'
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

/* <div class='mr-4'>
    <button class='flex justify-center items-center  rounded  py-1 px-2 outline-none'>
        <i class="fas fa-utensils"></i>
        <p class='ml-2 pt-1'>All</p>
    </button>
</div> */