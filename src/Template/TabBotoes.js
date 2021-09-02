import { produtos }  from '../produtos.js'


const tabBtnView = document.getElementById('categorias-btn')


export default function clickTab (event){
        
    const elemnt =  event.target.getAttribute('id')
    const tabColor = document.querySelectorAll('#categorias-btn button');
  
    if(elemnt === 'categorias-btn') return

    let divCurrent = event.target
    while(divCurrent.nodeName !== 'BUTTON'){
      divCurrent = divCurrent.parentElement
    }

    [...tabColor].forEach(buttonColor => {
      buttonColor.classList.remove('bg-yellow-300')
      buttonColor.classList.remove('shadow-md')
     })

     divCurrent.classList.add('bg-yellow-300')
     divCurrent.classList.add('shadow-md')

    
}

tabBtnView.addEventListener('click', clickTab)


