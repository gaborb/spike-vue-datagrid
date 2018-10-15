<template>
  <div class="columns is-gapless is-multiline is-mobile">
    <slot name="header"></slot>
    <template v-for="(row, index) in displayedRows">
      <slot v-bind:row="row" v-bind:isLast="isLast(index)" v-bind:removeHandler="getRemoveHandler(index)"></slot>
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
        const lastRow = rows[rows.length - 1]
        const isEmpty = Object.values(lastRow).reduce((acc, value) => acc === true && value === null, true)
        if (!isEmpty) {
          rows.push(Object.assign({}, this.rowModel))
        } else {
          this.$emit('rows-updated', { rows: rows.slice(0, -1) })
        }
      },
      deep: true
    }
  },
  methods: {
    removeAt(index) {
      this.displayedRows.splice(index, 1)
    },
    getRemoveHandler(index) {
      return () => {
        this.removeAt(index)
      }
    },
    isLast(index) {
      return index === this.displayedRows.length - 1
    }
  }
}
</script>

<style scoped lang="scss">
</style>
