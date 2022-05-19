<template>
  <div>
    <p
      class="text-center mb-0"
      v-text="label"
    />
    <div
      class="mx-4"
      style="position: relative;"
      :style="vertical ? 'width: 100%; height: 100%;' : ''"
    >
      <v-card
        flat
        color="accent"
        :width="vertical ? '8px' : '100%'"
        :height="vertical ? '100%' : '8px'"
      />
      <v-icon
        x-large
        class="accent--text"
        style="position: absolute;"
        :style="{
          [positionZero]: '0px',
          [positionHalf]: '50%',
          transform: `translate(${translateX}%, ${translateY}%)`,
        }"
      >
        mdi-menu-{{ icon }}
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    negative: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    icon() {
      if (this.vertical) {
        return this.negative ? 'up' : 'down'
      } else {
        return this.negative ? 'left' : 'right'
      }
    },
    positionZero() {
      if (this.vertical) {
        return this.negative ? 'top' : 'bottom'
      } else {
        return this.negative ? 'left' : 'right'
      }
    },
    positionHalf() {
      if (this.vertical) {
        return 'right'
      } else {
        return this.negative ? 'top' : 'bottom'
      }
    },
    translateX() {
      if (this.vertical) {
        return -50
      } else {
        return this.negative ? -50 : 50
      }
    },
    translateY() {
      if (this.vertical) {
        return this.negative ? -50 : 50
      } else {
        return this.negative ? -50 : 50
      }
    },
  },
}
</script>
