import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts: JSON.parse(localStorage.getItem('carts')) || [] // โหลดข้อมูลจาก local storage เมื่อโหลดหน้าเว็บ
  },
  getters: {
    getCarts: (state) => state.carts
  },
  mutations: {
    ADD_TO_CART(state, cartItem) {
      state.carts.push(cartItem)
      localStorage.setItem('carts', JSON.stringify(state.carts)) // เซฟข้อมูลลงใน local storage เมื่อมีการเปลี่ยนแปลง
    },
    REMOVE_FROM_CART(state, index) {
      state.carts.splice(index, 1)
      localStorage.setItem('carts', JSON.stringify(state.carts)) // เซฟข้อมูลลงใน local storage เมื่อมีการเปลี่ยนแปลง
    }
  },
  actions: {
    addCarts({ commit }, data) {
      commit('ADD_TO_CART', data)
    },
    removeCartItem({ commit, state }, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  modules: {}
})
