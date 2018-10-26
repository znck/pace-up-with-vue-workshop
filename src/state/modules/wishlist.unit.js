import * as wishlistModule from './wishlist'
import * as productsModule from './products'

describe('@state/modules/wishlist', () => {
  it('exports a valid Vuex module', () => {
    expect(wishlistModule).toBeAVuexModule()
  })

  describe('in a store', () => {
    let store

    const staticProducts = [
      { id: 1, price: 100 },
      { id: 2, price: 50 },
      { id: 3, price: 200 },
    ]

    beforeEach(async () => {
      store = createModuleStore(wishlistModule, {
        modules: { products: productsModule },
      })

      store.commit('products/SET', staticProducts)
    })

    test('getters.items returns products in wishlist', async () => {
      expect(store.getters.items).toEqual([])

      store.commit('ADD', 1)

      expect(store.getters.items).toEqual([staticProducts[0]])
    })

    test('getters.has returns true if product is in wishlist', async () => {
      expect(typeof store.getters.has).toBe('function')

      store.commit('ADD', 1)

      expect(store.getters.has(1)).toBe(true)
      expect(store.getters.has(staticProducts[0])).toBe(true)
    })

    test('actions.add product to wishlist', async () => {
      await store.dispatch('add', staticProducts[0])

      expect(store.getters.items).toHaveLength(1)
    })

    test('actions.remove product from wishlist', async () => {
      store.commit('ADD', 1)

      await store.dispatch('remove', staticProducts[0])
      expect(store.getters.items).toHaveLength(0)
    })
  })
})
