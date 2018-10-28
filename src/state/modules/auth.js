export const namespaced = true

export const state = () => ({
  currentUser: null,
})

export const getters = {
  loggedIn(state) {
    // write code here
  },
}

const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const mutations = {
  [SET_CURRENT_USER](state, newUser) {
    // write code here
  },
}

export const actions = {
  async logIn({ commit }, { username, password }) {
    // write code here
  },
  async logOut({ commit }) {
    // write code here
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
