<template>
  <div id="app">
    <DataGrid v-bind:rows="headers" v-bind:rowModel="rowModel" v-on:rows-updated="headersUpdated">
      <template slot="header">
        <div class="column is-5">
          <div class="field">
            <label class="label">Key</label>
          </div>
        </div>
        <div class="column is-5">
          <div class="field">
            <label class="label">Value</label>
          </div>
        </div>
        <div class="column is-1">
          <div class="field">
            <label class="label">Include</label>
          </div>
        </div>
        <div class="column is-1">
          <div class="field">
            <label class="label">Remove</label>
          </div>
        </div>
      </template>
      <template slot-scope="{ row, isLast, removeHandler }">
        <div class="column is-5">
          <div class="field">
            <label class="label is-sr-only is-hidden">Key</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="row.key">
            </div>
          </div>
        </div>
        <div class="column is-5">
          <div class="field">
            <label class="label is-sr-only is-hidden">Value</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" v-model="row.value">
            </div>
          </div>
        </div>
        <div class="column is-1">
          <div class="field">
            <label class="label is-sr-only is-hidden">Include</label>
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="row.include">
              </label>
            </div>
          </div>
        </div>
        <div class="column is-1">
          <button v-if="!isLast" class="button is-danger is-outlined" v-on:click="removeHandler()">
            <font-awesome-icon icon="times" />
          </button>
        </div>
      </template>
    </DataGrid>
    <pre>headers: {{ headers }}</pre>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import DataGrid from './components/DataGrid.vue'
import { SET_HEADERS } from './mutation-types';

export default {
  name: 'app',
  components: {
    DataGrid
  },
  data: function () {
    return {
      rowModel: { key: null, value: null, include: null }
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
