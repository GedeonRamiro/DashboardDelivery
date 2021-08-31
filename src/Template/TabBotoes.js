
const tabBtnView = document.getElementById('categorias-btn')

export default function tabBtn (){
     
}

 function clickTab (event){
    
    let elemnt =  event.target.getAttribute('id')
  
    if(elemnt === 'categorias-btn') return


    let divCurrent = event.target
    while(divCurrent.nodeName !== 'BUTTON'){
      divCurrent = divCurrent.parentElement
    }
    
    console.log(divCurrent.id)
    
}

tabBtnView.addEventListener('click', clickTab)