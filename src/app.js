

import  menuCategoriasBotoes  from './Template/BotoesCategoriasTemplate.js'
import  cardProduto  from './Template/cardProduto.js'
import  cardProdutoCategoria  from './Template/CardProdutoCategoria.js'
import  clickTab  from './Template/TabBotoes.js'
import CarrinhoTemplate from './Template/CarrinhoTemplate.js'
import { carrinho } from './State/carrinho.js'
import {adcionarItemCarrinho} from './Actions/adcionar.js'
import {deletarItemCarrinho} from './Actions/deletar.js'
import {decrementaQuantidade} from './Actions/quantidadeCarrinho.js'
import {incrementaQuantidade} from './Actions/quantidadeCarrinho.js'
import {valorCarrinho} from './Actions/valorCarrinho.js'



menuCategoriasBotoes()
cardProduto()
CarrinhoTemplate()




