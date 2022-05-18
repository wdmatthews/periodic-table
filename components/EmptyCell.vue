<template>
  <v-card
    :width="width"
    :height="height"
    :color="color"
    :flat="color == 'transparent'"
    :ripple="!isKey && color != 'transparent'"
    class="ma-1"
    style="display: relative;"
    :style="{
      'pointer-events': color == 'transparent' ? 'none' : 'auto',
      cursor: !isKey && color != 'transparent' ? 'pointer': 'auto',
    }"
    @click.native="isKey ? null : $emit('select-element')"
  >
    <slot />
  </v-card>
</template>

<script>
import { periodCount, groupCount } from '@/assets/data/grid'

export default {
  props: {
    columnSize: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: 'transparent',
    },
    isKey: {
      type: Boolean,
      default: false,
    },
  },
  data: vm => ({
    width: 64,
    height: 64,
  }),
  mounted() {
    const sizeFromWidth = 1.0 * (window.innerWidth - 8.0 * (groupCount + 1)) / groupCount
    const sizeFromHeight = 1.0 * (window.innerHeight - 8.0 * (periodCount + 1)) / periodCount
    let size = Math.floor(Math.min(sizeFromWidth, sizeFromHeight))
    
    if (size > 64) { size = 64 }
    if (this.isKey) { size = Math.round(size * 2.5) }
    
    this.width = this.columnSize * size + 8 * (this.columnSize - 1)
    this.height = size
  },
}
</script>
