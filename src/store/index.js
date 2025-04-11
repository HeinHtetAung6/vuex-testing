// store/index.js
import { createStore } from 'vuex'
import shop from '@/api/shop'

const store = createStore({
  state: {
    products : []
  },


  mutations: {
    setProducts(state,products){
        state.products = products
    }
  },


  actions: {
    fetchProducts({commit}) {
        return new Promise((resolve,reject) => {
            shop.getProducts(products => {
               commit('setProducts',products)
               resolve()
            })
        })
    }
  },


  getters: {
    availableProducts(state,getters){
        return state.products.filter(product => product.inventory > 0)
    }
  }
})

export default store
