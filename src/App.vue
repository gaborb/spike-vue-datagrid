<template>
  <div id="app">
    <HelloWorld v-bind:headers="headers" v-bind:headerModel="headerModel" v-on:headers-updated="headersUpdated">
      <template slot="header">
        <div class="column is-6">
          <div class="field">
            <label class="label">Key</label>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="label">Value</label>
          </div>
        </div>
      </template>
      <template slot-scope="{ header }">
        <div class="column is-6">
          <div class="field">
            <label class="label is-sr-only is-hidden">Key</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="header.key">
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="field">
            <label class="label is-sr-only is-hidden">Value</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="header.value">
            </div>
          </div>
        </div>
      </template>
    </HelloWorld>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import HelloWorld from './components/HelloWorld.vue'
import { SET_HEADERS } from './mutation-types';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      headerModel: { key: null, value: null }
    }
  },
  computed: {
    ...mapState(['headers'])
  },
  methods: {
    ...mapMutations({
      headersUpdated: SET_HEADERS
    })
  }
}
</script>

<style lang="scss" src="./App.scss">
</style>
