const modalFundo = document.getElementById('modal-fundo')
const modalCarrinho = document.getElementById('modal-carrinho')
const lojaCarrinho = document.getElementById('carrinho-loja')
const closeModal = document.getElementById('close-modal')

export function modalView() {
    modalFundo.classList.toggle('hidden')
    modalCarrinho.classList.toggle('hidden')
}

export function close() {
    modalFundo.classList.toggle('hidden')
    modalCarrinho.classList.toggle('hidden')
}

lojaCarrinho.addEventListener('click', modalView)
closeModal.addEventListener('click', close)

