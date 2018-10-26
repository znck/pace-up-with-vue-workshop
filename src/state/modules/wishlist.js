export const namespaced = true

export const state = () => ({
  itemIds: [],
})

export const getters = {
  items(state, getters, rootState, rootGetters) {
    const productById = rootGetters['products/byId']

    return state.itemIds.map(id => productById(id))
  },
  has(state, getters) {
    const ids = new Set(state.itemIds)
    const resolveId = productOrID =>
      productOrID !== null && typeof productOrID === 'object'
        ? productOrID.id
        : productOrID

    return product => ids.has(resolveId(product))
  },
}

const ADD_TO_WISHLIST = 'ADD'
const REMOVE_FROM_WISHLIST = 'REMOVE'
export const mutations = {
  [ADD_TO_WISHLIST](state, id) {
    // ...
  },
  [REMOVE_FROM_WISHLIST](state, id) {
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
