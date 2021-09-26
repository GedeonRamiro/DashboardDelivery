

import menuCategoriasBotoes  from './Template/BotoesCategoriasTemplate.js'
import cardProduto from './Template/CardProduto.js'
import cardProdutoCategoria  from './Template/CardProdutoCategoria.js'
import clickTab from './actions/TabBotoes.js'
import CarrinhoTemplate from './Template/CarrinhoTemplate.js'
import { carrinho } from './State/carrinho.js'
import {adcionarItemCarrinho} from './actions/adcionar.js'
import {deletarItemCarrinho} from './actions/deletar.js'
import {quantidadeCarrinho} from './actions/quantidadeCarrinho.js'
import {valorCarrinho} from './actions/valorCarrinho.js'
import {modalView} from './Template/ModalTemplate.js'
import {quantidadeItemCarrinho} from './Template/CarrinhoQuantidadeTemplate.js'


menuCategoriasBotoes()
cardProduto()
CarrinhoTemplate()




