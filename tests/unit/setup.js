const _ = require('lodash')
const Vuex = require('vuex')
const { createLocalVue } = require('@vue/test-utils')

global.createModuleStore = (vuexModule, options = {}) => {
  createLocalVue().use(Vuex)
  const store = new Vuex.Store({
    ..._.cloneDeep(vuexModule),
    modules: {
      ...options.modules,
      auth: {
        namespaced: true,
        state: {
          currentUser: options.currentUser,
        },
      },
    },
  })

  return store
}
