<template>
  <EmptyCell
    :color="color"
    :is-key="isKey"
  >
    <span
      v-show="periodNumber != 0"
      style="position: absolute; top: 50%; left: -4px; transform: translate(-100%, -50%);"
    >
      {{ (periodNumber == 1 ? 'Period ' : '') + periodNumber }}
    </span>
    <span
      v-show="groupNumber != 0"
      class="text-center"
      style="position: absolute; left: 50%; top: -4px; transform: translate(-50%, -100%);"
    >
      {{ (groupNumber == 1 ? 'Group ' : '') + groupNumber }}
    </span>
    <div
      v-show="view == 'Periodic Table'"
      class="cell"
    >
      <p
        class="mb-n1 text-center"
        :style="{ 'font-size': `${isKey ? 2.5 * 1.25 : 1.25}rem` }"
        v-text="element.symbol"
      />
      <p
        class="ma-0 text-center"
        :style="{ 'font-size': `${isKey ? 2.5 * 0.65 : 0.65}rem` }"
        v-text="element.weight"
      />
      <p
        class="ma-0 text-center"
        :style="{ 'font-size': `${isKey ? 2.5 * 0.65 : 0.65}rem` }"
        v-text="element.name"
      />
      <p
        style="position: absolute; top: 4px; left: 2px;"
        :style="{ 'font-size': `${isKey ? 2.5 * 0.65 : 0.65}rem` }"
        v-text="atomicNumber"
      />
    </div>
    <div
      v-show="view == 'Ionic States'"
      class="cell"
    >
      
    </div>
    <div
      v-show="view == 'Lewis Dots'"
      class="cell"
    >
      
    </div>
    <div
      v-show="view == 'Electron Configurations'"
      class="cell"
    >
      <p
        class="ma-0 text-center"
        :style="{ 'font-size': `${isKey ? 2.5 : 1}rem` }"
        v-text="element.symbol"
      />
      <p
        class="ma-0 text-center"
        :style="{ 'font-size': `${isKey ? 2.5 : 1}rem` }"
        v-text="block"
      />
    </div>
    <div
      v-show="view == 'Trends'"
      class="cell"
    >
      
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
    atomicNumber: {
      type: Number,
      default: 1,
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
.cell {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
}
</style>
