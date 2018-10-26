import Vue from 'vue'

export const namespaced = true

export const state = () => ({
  itemToQuantity: {},
})

export const getters = {
  items(state, getters, rootState, rootGetters) {
    const productById = rootGetters['products/byId']

    // ...
  },
  amount(state, getters) {
    // ...
  },
  quantityIn(state) {
    const itemToQuantity = state.itemToQuantity
    const resolveId = productOrID =>
      productOrID !== null && typeof productOrID === 'object'
        ? productOrID.id
        : productOrID

    return product => {
      // ...
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
    // ...
  },
  [REMOVE_FROM_CART](state, id) {
    // ...
  },
}

export const actions = {
  add({ commit }, product) {
    // ...
  },
  remove({ commit }, product) {
    // ...
  },
}
