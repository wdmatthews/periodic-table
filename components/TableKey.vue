<template>
  <v-row no-gutters>
    <v-col class="text-right">
      <div v-show="view == 'Periodic Table'">
        Labels
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
    <v-col>
      <div v-show="view == 'Periodic Table'">
        Labels
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
