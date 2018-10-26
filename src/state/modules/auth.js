export const namespaced = true

export const state = () => ({
  currentUser: null,
})

export const getters = {
  loggedIn(state) {
    // ...
  },
}

const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const mutations = {
  [SET_CURRENT_USER](state, newUser) {
    // ...
  },
}

export const actions = {
  async logIn({ commit }, { username, password }) {
    // ...
  },
  async logOut({ commit }) {
    // ...
  },
}

// Fake Auth API.
function tryLogin(username, password) {
  if (username === 'user' && password === 'password') {
    return {
      id: 1,
      name: 'John Doe',
      username: 'user',
    }
  }
}
