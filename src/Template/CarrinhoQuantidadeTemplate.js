import { carrinho } from '../State/carrinho.js'

const $quantidadeCarrinho = document.getElementById('quantidade-carrinho')
const $quantidadeCarrinhoItems = document.getElementById('quantidade-itens')


export function quantidadeItemCarrinho() {

    const quantidadeProdutosCarrinho = Object.values(carrinho)
        .map(produto => produto.quantidade)
        .reduce((acc, quantidade) => acc + quantidade, 0)

        $quantidadeCarrinho.textContent = quantidadeProdutosCarrinho

    if(quantidadeProdutosCarrinho <= 0 ){
       return $quantidadeCarrinhoItems.classList.add('hidden')
    }

    $quantidadeCarrinhoItems.classList.remove('hidden')

  
}        
