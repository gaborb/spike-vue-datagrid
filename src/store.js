import Vue from 'vue'
import Vuex from 'vuex'
import { SET_HEADERS } from './mutation-types'

Vue.use(Vuex)

const state = {
  headers: [
    {
      key: 'Content-Type', 
      value: 'application/json',
      _include: false
    },
    {
      key: 'Accept', 
      value: 'application/json',
      _include: true
    },
    {
      key: 'Host', 
      value: 'example.com',
      _include: true
    }
  ]
}

export const mutations = {
  [SET_HEADERS] (state, payload) {
    state.headers = payload.rows
  }  
}

export default new Vuex.Store({
  state,
  mutations
})