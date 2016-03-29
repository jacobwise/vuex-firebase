import Vue from 'vue'
import Vuex from 'vuex'

const mutations = {
  AUTH_CHANGED (state, authData) {
    state.authData = authData
  },
  REDIRECT_LOGIN (state) {
    state.route.path = '/login'
  },
  GET_PROJECTS (state, projects) {
    state.projects = projects
  },
  UPDATE_PROJECT (state, project) {
    state.project = project
  },
  SET_PROJECT (state, project) {
    state.project = project
  },
  GET_PROJECTS_COUNT (state, count) {
    state.count = count
  }
}

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

const state = {
  route: {},
  authData: {},
  projects: {},
  project: {},
  count: 0
}

const store = new Vuex.Store({
  strict: debug,
  state,
  mutations
})

export default store
