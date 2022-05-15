<template>
  <EmptyCell :color="color">
    <span
      v-show="periodNumber != 0"
      style="position: absolute; top: 50%; left: -4px; transform: translate(-100%, -50%);"
    >
      {{ periodNumber }}
    </span>
    <span
      v-show="groupNumber != 0"
      style="position: absolute; left: 50%; top: -4px; transform: translate(-50%, -100%);"
    >
      {{ groupNumber }}
    </span>
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
    periodNumber: {
      type: Number,
      default: 0,
    },
    groupNumber: {
      type: Number,
      default: 0,
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
