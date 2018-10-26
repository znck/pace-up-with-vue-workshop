import * as cartModule from './cart'
import * as productsModule from './products'

describe('@state/modules/cart', () => {
  it('exports a valid Vuex module', () => {
    expect(cartModule).toBeAVuexModule()
  })

  describe('in a store', () => {
    let store

    const staticProducts = [
      { id: 1, price: 100 },
      { id: 2, price: 50 },
      { id: 3, price: 200 },
    ]

    beforeEach(async () => {
      store = createModuleStore(cartModule, {
        modules: { products: productsModule },
      })

      store.commit('products/SET', staticProducts)
    })

    test('getters.items returns products in cart', async () => {
      expect(store.getters.items).toEqual([])

      store.commit('ADD', 1)

      expect(store.getters.items).toEqual([
        { quantity: 1, ...staticProducts[0] },
      ])
    })

    test('getters.amount returns sum of amount of products in cart', async () => {
      store.commit('ADD', 1)
      store.commit('ADD', 3)
      store.commit('ADD', 3)
      expect(store.getters.amount).toBe(500)
    })
    test('getters.quantityIn returns quantity of product in cart', async () => {
      store.commit('ADD', 3)
      store.commit('ADD', 3)
      expect(store.getters.quantityIn(1)).toBe(0)
      expect(store.getters.quantityIn(3)).toBe(2)
    })

    test('getters.has returns sum of amount of products in cart', async () => {
      store.commit('ADD', 3)
      store.commit('ADD', 3)
      expect(store.getters.has(1)).toBe(false)
      expect(store.getters.has(3)).toBe(true)
    })

    test('actions.add commits product id in state', async () => {
      await store.dispatch('add', staticProducts[0])

      expect(store.getters.items).toHaveLength(1)
    })

    test('actions.remove ', async () => {
      store.commit('ADD', 1)

      await store.dispatch('remove', staticProducts[0])
      expect(store.getters.items).toHaveLength(0)
    })
  })
})
