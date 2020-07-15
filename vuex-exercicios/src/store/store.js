import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
      produtos: [],
      quantidade: 0,
      preco: 0
   },
   getters: {
      valorTotal(state) {
         return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0);
      }
   },
   mutations: {
      adicionarProduto(state, payLoad) {
         state.produtos.push(payLoad)
      },
      setQuantidade(state, payLoad) {
         state.quantidade = payLoad
      },
      setPreco(state, payLoad) {
         state.preco = payLoad
      }
   }
})