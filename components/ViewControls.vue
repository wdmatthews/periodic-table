<template>
  <v-row
    no-gutters
    justify="center"
    align="center"
    class="pa-1"
  >
    <v-col cols="12">
      <h1
        class="text-center"
        v-text="view"
      />
    </v-col>
    <v-col cols="6">
      <v-slider
        min="0"
        :max="views.length - 1"
        ticks="always"
        :tick-labels="views"
        :value="viewIndex"
        @input="setView"
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
    view: '',
  }),
  created() {
    this.setView(0)
  },
  methods: {
    setView(viewIndex) {
      this.viewIndex = viewIndex
      this.view = this.views[this.viewIndex]
      this.$emit('set-view', this.view)
    },
  },
}
</script>
