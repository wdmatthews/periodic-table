<template>
  <EmptyCell :color="color">
    <v-card-text class="pa-4">
      H
    </v-card-text>
  </EmptyCell>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
  },
}
</script>
