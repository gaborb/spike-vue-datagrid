<template>
  <div class="columns is-gapless is-multiline is-mobile">
    <slot name="header"></slot>
    <template v-for="(row, index) in displayedRows">
      <slot v-bind:row="row" v-bind:isLast="isLast(index)" v-bind:removeHandler="bindRemoveHandler(index)"></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'DataGrid',
  props: [
    'rows',
    'rowModel'
  ],
  data: function() {
    return {
      displayedRows: []
    };
  },
  created: function () {
    this.displayedRows = this.rows.slice(0)
  },
  watch: {
    displayedRows: {
      handler: function(rows) {
        if (!this.isLastRowEmpty()) {
          rows.push(Object.assign({ _include: true }, this.rowModel))
        } else {
          this.$emit('rows-updated', { rows: this.getIncludedRows() })
        }
      },
      deep: true
    }
  },
  methods: {
    removeAt(index) {
      this.displayedRows.splice(index, 1)
    },
    bindRemoveHandler(index) {
      return () => {
        this.removeAt(index)
      }
    },
    isLast(index) {
      return index === this.displayedRows.length - 1
    },
    getIncludedRows() {
      return this.displayedRows.slice(0, -1).filter(row => row._include === true)
    },
    isLastRowEmpty() {
        const lastRow = this.displayedRows[this.displayedRows.length - 1]
        const publicKeys = Object.keys(lastRow).filter(key => key.indexOf('_') === -1)
        return publicKeys.reduce((acc, key) => acc === true && lastRow[key] === null, true)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
