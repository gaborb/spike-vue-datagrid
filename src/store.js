import Vue from 'vue'
import Vuex from 'vuex'
import { SET_HEADERS } from './mutation-types'

Vue.use(Vuex)

const state = {
  headers: [
    {
      key: 'Content-Type', 
      value: 'application/json',
      include: false
    },
    {
      key: 'Accept', 
      value: 'application/json',
      include: true
    },
    {
      key: 'Host', 
      value: 'example.com',
      include: true
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