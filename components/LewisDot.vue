<template>
  <div
    class="pa-1 black rounded-circle"
    :class="isKey ? 'pa-2' : 'pa-1'"
    style="position: absolute;"
    :style="`${xPosition}; ${yPosition}; transform: translate(${translateX}50%, ${translateY}50%);`"
  />
</template>

<script>
import {
  TOP_LEFT, TOP_RIGHT, RIGHT_TOP, RIGHT_BOTTOM, BOTTOM_RIGHT, BOTTOM_LEFT, LEFT_BOTTOM, LEFT_TOP,
} from '@/assets/data/lewisDots'

export default {
  props: {
    isKey: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    translateX() {
      if (this.position === RIGHT_TOP || this.position === RIGHT_BOTTOM) { return '' }
      return '-'
    },
    translateY() {
      if (this.position === BOTTOM_RIGHT || this.position === BOTTOM_LEFT) { return '' }
      return '-'
    },
    largePosition() {
      return this.isKey ? 2.5 * 12 : 12
    },
    smallPosition() {
      return this.isKey ? 2.5 * 8 : 8
    },
    xPosition() {
      switch (this.position) {
        case TOP_LEFT:
        case BOTTOM_LEFT:
          return `left: calc(50% - ${this.smallPosition}px)`
        case TOP_RIGHT:
        case BOTTOM_RIGHT:
          return `left: calc(50% + ${this.smallPosition}px)`
        case RIGHT_TOP:
        case RIGHT_BOTTOM:
          return `right: ${this.largePosition}px`
        case LEFT_TOP:
        case LEFT_BOTTOM:
          return `left: ${this.largePosition}px`
        default:
          return 'left: 0px'
      }
    },
    yPosition() {
      switch (this.position) {
        case TOP_LEFT:
        case TOP_RIGHT:
          return `top: ${this.largePosition}px`
        case RIGHT_TOP:
        case LEFT_TOP:
          return `top: calc(50% - ${this.smallPosition}px)`
        case RIGHT_BOTTOM:
        case LEFT_BOTTOM:
          return `top: calc(50% + ${this.smallPosition}px)`
        case BOTTOM_LEFT:
        case BOTTOM_RIGHT:
          return `bottom: ${this.largePosition}px`
        default:
          return 'top: 0px'
      }
    },
  },
}
</script>
