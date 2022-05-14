<template>
  <div>
    <ViewControls ref="viewControls" />
  </div>
</template>

<script>
export default {
  computed: {
    view() {
      return this.$refs.viewControls ? this.$refs.viewControls.view : ''
    },
  },
}
</script>
