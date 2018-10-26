import * as productsModule from './products'

describe('@state/modules/products', () => {
  it('exports a valid Vuex module', () => {
    expect(productsModule).toBeAVuexModule()
  })

  describe('in a store', () => {
    let store
    beforeEach(() => {
      store = createModuleStore(productsModule)
    })

    test('getters.byId should return product with given id', () => {
      expect.assertions(2)

      expect(typeof store.getters.byId).toBe('function')

      return store.dispatch('init').then(products => {
        expect(store.getters.byId(products[0].id)).toEqual(products[0])
      })
    })

    test('actions.init commits the products', () => {
      expect.assertions(3)

      return store.dispatch('init').then(products => {
        expect(products).toBeTruthy()
        expect(products.length > 1).toBeTruthy()
        expect(store.state.products).toEqual(products)
      })
    })
  })
})
