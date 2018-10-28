import Vue from 'vue'

export const namespaced = true

export const state = () => ({
  itemToQuantity: {},
})

export const getters = {
  items(state, getters, rootState, rootGetters) {
    const productById = rootGetters['products/byId']

    // write code here
  },
  amount(state, getters) {
    // write code here
  },
  quantityIn(state) {
    const itemToQuantity = state.itemToQuantity
    const resolveId = productOrID =>
      productOrID !== null && typeof productOrID === 'object'
        ? productOrID.id
        : productOrID

    return product => {
      // write code here
    }
  },
  has(state, getters) {
    return product => getters.quantityIn(product) > 0
  },
}

const ADD_TO_CART = 'ADD'
const REMOVE_FROM_CART = 'REMOVE'
export const mutations = {
  [ADD_TO_CART](state, id) {
    // write code here
  },
  [REMOVE_FROM_CART](state, id) {
    // write code here
  },
}

export const actions = {
  add({ commit }, product) {
    // write code here
  },
  remove({ commit }, product) {
    // write code here
  },
}
