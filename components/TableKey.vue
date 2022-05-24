<template>
  <v-row no-gutters>
    <v-col
      cols="5"
      class="text-right text-body-1"
    >
      <div v-show="view == 'Periodic Table'">
        <p class="ma-0">
          Atomic Number
          <br><br>
          Symbol
          <br><br>
          Atomic Mass
          <br><br>
          Name
        </p>
      </div>
      <div v-show="view == 'Ionic States'">
        <p class="ma-0">
          Atomic Number
          <br><br><br><br>
          Ion
          <br><br>
          Name
        </p>
      </div>
      <div v-show="view == 'Lewis Dots'">
        <p class="ma-0">
          <br><br><br>
          Symbol
        </p>
      </div>
      <div v-show="view == 'Electron Configurations'">
        <p class="ma-0">
          Atomic Number
          <br><br>
          Symbol
          <br><br>
          Orbital
          <br><br>
          Name
        </p>
      </div>
      <div v-show="view == 'Trends'">
        <p class="ma-0">
          Atomic Number
          <br><br><br>
          Symbol
          <br><br><br>
          Name
        </p>
      </div>
    </v-col>
    <TableCell
      :element="element"
      :atomic-number="atomicNumber"
      :view="view"
      is-key
    />
  </v-row>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      default: () => ({
        name: 'Hydrogen',
        symbol: 'H',
      }),
    },
    atomicNumber: {
      type: Number,
      default: 1,
    },
    view: {
      type: String,
      default: '',
    },
  },
}
</script>
