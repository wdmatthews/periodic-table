<template>
  <v-row
    no-gutters
    justify="center"
    align="center"
    class="pa-4"
  >
    <v-col cols="12">
      <h1
        class="text-center"
        v-text="view"
      />
    </v-col>
    <v-col cols="6">
      <v-slider
        v-model="viewIndex"
        min="0"
        :max="views.length - 1"
        ticks="always"
        :tick-labels="views"
      />
    </v-col>
  </v-row>
</template>

<script>
import views from '@/assets/data/views'

export default {
  data: vm => ({
    views,
    viewIndex: 0,
  }),
  computed: {
    view() {
      return this.views[this.viewIndex]
    },
  },
}
</script>
