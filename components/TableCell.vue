<template>
  <EmptyCell :color="color">
    <div v-show="view == 'Periodic Table'">
      <p
        class="symbol ma-0 text-center"
        v-text="element.symbol"
      />
      <p
        class="name ma-0 text-center"
        v-text="element.name"
      />
    </div>
    <div v-show="view == 'Ionic States'">
      
    </div>
    <div v-show="view == 'Lewis Dots'">
      
    </div>
    <div v-show="view == 'Electron Configurations'">
      
    </div>
    <div v-show="view == 'Trends'">
      
    </div>
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
    view: {
      type: String,
      default: '',
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
