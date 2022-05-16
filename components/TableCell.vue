<template>
  <EmptyCell
    :color="color"
    :is-key="isKey"
  >
    <span
      v-show="periodNumber != 0"
      class="black--text"
      style="position: absolute; top: 50%; left: -4px; transform: translate(-100%, -50%);"
    >
      {{ (periodNumber == 1 ? 'Period ' : '') + periodNumber }}
    </span>
    <span
      v-show="groupNumber != 0"
      class="text-center black--text"
      style="position: absolute; left: 50%; top: -4px; transform: translate(-50%, -100%);"
    >
      {{ (groupNumber == 1 ? 'Group ' : '') + groupNumber }}
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
      <p
        class="symbol ma-0 text-center"
        v-text="block"
      />
    </div>
    <div v-show="view == 'Trends'">
      
    </div>
  </EmptyCell>
</template>

<script>
import families from '@/assets/data/families'
import blocks from '@/assets/data/blocks'

export default {
  props: {
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
    block: {
      type: String,
      default: '1s',
    },
    isKey: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    color() {
      return this.view === 'Electron Configurations' ? (blocks[this.block[1]] ?? '') : (families[this.element.family] ?? '')
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
