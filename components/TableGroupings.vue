<template>
  <v-col cols="3">
    <v-chip
      v-for="(color, group, g) in groupings"
      :key="`group-${g}`"
      class="ma-1 white--text"
      :color="color"
    >
      {{ group }}
    </v-chip>
  </v-col>
</template>

<script>
import families from '@/assets/data/families'
import blocks from '@/assets/data/blocks'

export default {
  props: {
    view: {
      type: String,
      default: '',
    },
  },
  data: vm => ({
    families,
    blocks,
  }),
  computed: {
    groupings() {
      return this.view === 'Electron Configurations' ? this.blocks : this.families
    },
  },
}
</script>
