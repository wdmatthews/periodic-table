<template>
  <v-row no-gutters>
    <v-col
      cols="5"
      class="text-right text-h6"
    >
      <div v-show="view == 'Periodic Table'">
        <p class="ma-0 text-right">
          Atomic Number
          <br>
          Symbol
          <br><br>
          Atomic Weight
          <br>
          Name
        </p>
      </div>
      <div v-show="view == 'Ionic States'">
        
      </div>
      <div v-show="view == 'Lewis Dots'">
        
      </div>
      <div v-show="view == 'Electron Configurations'">
        
      </div>
      <div v-show="view == 'Trends'">
        
      </div>
    </v-col>
    <TableCell
      :element="element"
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
    view: {
      type: String,
      default: '',
    },
  },
}
</script>
