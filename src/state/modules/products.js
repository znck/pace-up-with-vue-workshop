export const namespaced = true

export const state = () => ({
  products: [],
})

export const getters = {
  byId: state => {
    const hash = {}
    state.products.forEach(product => {
      hash[product.id] = product
    })

    // write code here
  },
}

const SET_PRODUCTS = 'SET'
export const mutations = {
  [SET_PRODUCTS](state, products) {
    state.products = products
  },
}

export const actions = {
  async init({ commit }) {
    const products = await fakeProductsAPI()

    commit(SET_PRODUCTS, products)

    return products
  },
}

async function fakeProductsAPI() {
  return require('./products.json')
}
