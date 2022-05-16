<template>
  <v-row no-gutters>
    <v-col class="text-right">
      Labels
    </v-col>
    <TableCell
      :element="element"
      :view="view"
      is-key
    />
    <v-col>
      Labels
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
