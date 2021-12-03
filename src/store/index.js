import { createStore } from 'vuex'

export default createStore({
  state: {
    project: '0'
  },
  mutations: {
    projectOpen(state, value) {
      state.project = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
