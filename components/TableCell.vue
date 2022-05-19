<template>
  <EmptyCell
    :color="color"
    :is-key="isKey"
    @select-element="isKey ? null : $emit('select-element', { element, atomicNumber })"
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
      <span v-show="view != 'Ionic States'">{{ (groupNumber == 1 ? 'Group ' : '') + groupNumber }}</span>
      <span v-show="view == 'Ionic States'">{{ (groupNumber == 1 ? 'Charge ' : '') + charge }}</span>
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
        :style="{ 'font-size': `${isKey ? 2.5 * 0.6 : 0.6}rem` }"
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
      <p
        v-for="(ion, i) in element.ions"
        :key="`ion-${i}`"
        class="mb-n3 text-center"
        :style="{ 'font-size': `${isKey ? 2.5 * 1.25 : 1.25}rem` }"
      >
        {{ element.symbol }}
        <sup v-show="ion != 0">
          {{ formatCharge(ion) }}
        </sup>
      </p>
      <p
        class="mb-0 text-center"
        :style="{ 'font-size': `${isKey ? 2.5 * 0.6 : 0.6}rem` }"
        :class="{ 'mt-2': !isKey }"
        v-text="element.name"
      />
      <p
        style="position: absolute; top: 4px; left: 2px;"
        :style="{ 'font-size': `${isKey ? 2.5 * 0.65 : 0.65}rem` }"
        v-text="atomicNumber"
      />
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
        class="mb-n1 text-center"
        :style="{ 'font-size': `${isKey ? 2.5 * 1.25 : 1.25}rem` }"
        v-text="element.symbol"
      />
      <p
        class="ma-0 text-center"
        :style="{ 'font-size': `${isKey ? 2.5 * 0.65 : 0.65}rem` }"
        v-text="block"
      />
      <p
        class="ma-0 text-center"
        :style="{ 'font-size': `${isKey ? 2.5 * 0.6 : 0.6}rem` }"
        v-text="element.name"
      />
      <p
        style="position: absolute; top: 4px; left: 2px;"
        :style="{ 'font-size': `${isKey ? 2.5 * 0.65 : 0.65}rem` }"
        v-text="atomicNumber"
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
    charge() {
      if (this.groupNumber < 3) { return `${this.groupNumber}+` }
      if (this.groupNumber === 13) { return '3+' }
      if (this.groupNumber > 14 && this.groupNumber < 18) { return `${18 - this.groupNumber}-` }
      return ''
    },
  },
  methods: {
    formatCharge(ion) {
      const charge = Math.abs(ion)
      return `${charge > 1 ? charge : ''}${ion > 0 ? '+' : '-'}`
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
