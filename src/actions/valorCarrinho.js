import { carrinho } from '../State/carrinho.js'

const $subTotal = document.getElementById('subtotal')
const $delivery = document.getElementById('delivery')
const $taxa = document.getElementById('taxa')
const $total = document.getElementById('total')

const deliveryPorCompra = 10
const cobrancaTaxa = 0.10


export function valorCarrinho() {

    const subTotal = Object.values(carrinho)
        .map((produto) => produto.preco * produto.quantidade)
        .reduce((acc, preco) => acc + preco, 0)

    const quantidadeProdutosTaxa = Object.values(carrinho)
        .map((produto) => produto.quantidade)
        .reduce((acc, quantidade) => acc + quantidade, 0)
        console.log('quantitade: ', quantidadeProdutosTaxa)    

    const taxaPorProduto = Object.values(carrinho)
        .map(produto => produto.preco * cobrancaTaxa)
        .reduce((acc, quantidade) => acc + quantidade, 0)
    console.log('taxaPorProduto:',taxaPorProduto)
    
    const teste = Object.values(carrinho)
    .map(produto => produto.preco * cobrancaTaxa)
    console.log(teste)

    const quantidadeItens = Object.values(carrinho).length

    const delivery = quantidadeItens > 10 ? 'Grátis' : deliveryPorCompra

    const taxa = (quantidadeProdutosTaxa * taxaPorProduto)
    //console.log(taxa)

    const subTotalMaisDelivery = subTotal + delivery
    let total = typeof subTotalMaisDelivery === 'string' ? subTotal : (subTotalMaisDelivery)
    total = (total + taxa)

    $subTotal.textContent = `R$ ${(subTotal.toFixed(2))}`
    $delivery.textContent = `R$ ${delivery.toFixed(2)}` 
    $taxa.textContent = `R$ ${taxa.toFixed(2)}`
    $total.textContent = `R$ ${total.toFixed(2)}`

}


