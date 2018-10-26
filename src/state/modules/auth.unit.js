import * as authModule from './auth'

describe('@state/modules/auth', () => {
  it('exports a valid Vuex module', () => {
    expect(authModule).toBeAVuexModule()
  })

  describe('in a store', () => {
    let store
    beforeEach(() => {
      store = createModuleStore(authModule)
    })

    test('getters.loggedIn returns true when currentUser is an object', () => {
      store.commit('SET_CURRENT_USER', {})
      expect(store.getters.loggedIn).toEqual(true)
    })

    test('getters.loggedIn returns false when currentUser is null', () => {
      store.commit('SET_CURRENT_USER', null)
      expect(store.getters.loggedIn).toEqual(false)
    })

    test('actions.logIn commits the currentUser and resolves to the user with username and password', () => {
      expect.assertions(2)

      return store
        .dispatch('logIn', { username: 'user', password: 'password' })
        .then(user => {
          expect(user).toEqual(validUserExample)
          expect(store.state.currentUser).toEqual(validUserExample)
        })
    })

    test('actions.logIn rejects with 401 when provided an incorrect username and password', () => {
      expect.assertions(1)

      return store
        .dispatch('logIn', {
          username: 'bad username',
          password: 'bad password',
        })
        .catch(error => {
          expect(error.message).toEqual('Request failed with status code 401')
        })
    })

    test('getters.logOut clears currentUser', () => {
      expect.assertions(1)

      store.commit('SET_CURRENT_USER', {})
      store.dispatch('logOut').then(() => {
        expect(store.state.currentUser).toEqual(null)
      })
    })
  })
})

const validUserExample = {
  id: 1,
  username: 'user',
  name: 'John Doe',
}
