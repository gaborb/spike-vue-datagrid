<template>
  <div>
    <div class="columns is-gapless is-multiline is-mobile">
      <slot name="header"></slot>
      <template v-for="header in displayedHeaders">
        <slot v-bind:header="header"></slot>
      </template>
    </div>
    <pre>headers: {{ headers }}</pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: [
    'headers',
    'headerModel'
  ],
  data: function() {
    return {
      displayedHeaders: []
    };
  },
  created: function () {
    this.displayedHeaders = this.headers.slice(0);
  },
  watch: {
    displayedHeaders: {
      handler: function(headers) {
        const lastHeader = headers[headers.length - 1]
        const isEmpty = Object.values(lastHeader).reduce((acc, value) => acc === true && value === null, true);
        if (!isEmpty) {
          headers.push(Object.assign({}, this.headerModel))
        } else {
          this.$emit('headers-updated', { headers: headers.slice(0, -1) });
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
</style>
