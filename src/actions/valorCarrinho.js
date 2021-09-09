import { carrinho } from '../State/carrinho.js'

const $subTotal = document.getElementById('subtotal')
const $delivery = document.getElementById('delivery')
const $taxa = document.getElementById('taxa')
const $total = document.getElementById('total')

let deliveryPorCompra = 10
const cobrancaTaxa = 0.10


export function valorCarrinho() {

    const subTotal = Object.values(carrinho)
        .map((produto) => produto.preco * produto.quantidade)
        .reduce((acc, preco) => acc + preco, 0)
  
    const quantidadeProdutosTaxa = Object.values(carrinho)
        .map(produto => produto.quantidade)
        .reduce((acc, quantidade) => acc + quantidade, 0)

    const taxa = Object.values(carrinho)
    .map(produto => (produto.preco * produto.quantidade) * cobrancaTaxa)
    .reduce((acc, quantidade) => acc + quantidade, 0)
    
    const delivery = quantidadeProdutosTaxa > 10 ? 'Grátis' : deliveryPorCompra.toFixed(2)

    const subTotalMaisDelivery = subTotal + delivery
    
    let total = typeof subTotalMaisDelivery === 'string' ? subTotal : (subTotalMaisDelivery)
    total = (total + taxa)

    $subTotal.textContent = `R$ ${(subTotal.toFixed(2))}`
    $delivery.textContent = `${delivery}` 
    $taxa.textContent = `R$ ${taxa.toFixed(2)}`
    $total.textContent = `R$ ${total.toFixed(2)}`

}


