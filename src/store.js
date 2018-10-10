import Vue from 'vue'
import Vuex from 'vuex'
import { SET_HEADERS } from './mutation-types'

Vue.use(Vuex)

const state = {
  headers: [
    {
      key: 'Content-Type', 
      value: 'application/json'
    }
  ]
}

export const mutations = {
  [SET_HEADERS] (state, payload) {
    state.headers = payload.headers
  }  
}

export default new Vuex.Store({
  state,
  mutations
})