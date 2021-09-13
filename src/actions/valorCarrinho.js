import { carrinho } from '../State/carrinho.js'

const $subTotal = document.querySelectorAll('#subtotal')
const $delivery = document.querySelectorAll('#delivery')
const $taxa = document.querySelectorAll('#taxa')
const $total = document.querySelectorAll('#total')

const [subTotalTemplate, subTotalModalTemplate] = $subTotal
const [deliveryTemplate, deliveryModalTemplate] = $delivery
const [taxaTemplate, taxaModalTemplate] = $taxa
const [totalTemplate, totalModalTemplate] = $total

const deliveryPorCompra = 10
const cobrancaTaxa = Number(0.10)

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
    
    const delivery = quantidadeProdutosTaxa > 10 ? 'Grátis' : deliveryPorCompra
    const subTotalMaisDelivery = subTotal + delivery

    let resultDelivery = (typeof delivery === 'string') ? delivery : `R$ ${delivery.toFixed(2)}`
    
    if(Object.values(carrinho).length <= 0){
        resultDelivery = 'R$ 0.00'
    }
  
    let total = typeof delivery === 'string' ? subTotal : subTotalMaisDelivery
    total = (total + taxa)

    subTotalTemplate.textContent = `R$ ${(subTotal.toFixed(2))}`
    deliveryTemplate.textContent = `${resultDelivery}` 
    taxaTemplate.textContent = `R$ ${taxa.toFixed(2)}`
    totalTemplate.textContent = `R$ ${total.toFixed(2)}`

    subTotalModalTemplate.textContent = `R$ ${(subTotal.toFixed(2))}`
    deliveryModalTemplate.textContent = `${resultDelivery}` 
    taxaModalTemplate.textContent = `R$ ${taxa.toFixed(2)}`
    totalModalTemplate.textContent = `R$ ${total.toFixed(2)}`

}


