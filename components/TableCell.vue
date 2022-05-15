<template>
  <EmptyCell :color="color">
    <p
      class="symbol ma-0 text-center"
      v-text="element.symbol"
    />
    <p
      class="name ma-0 text-center"
      v-text="element.name"
    />
  </EmptyCell>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    element: {
      type: Object,
      default: () => ({
        name: 'Hydrogen',
        symbol: 'H',
      }),
    },
  },
}
</script>

<style scoped>
.symbol {
  font-size: 1rem;
}

.name {
  font-size: 0.5rem;
}
</style>
