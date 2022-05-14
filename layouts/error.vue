<template>
  <div>
    Error {{ error.statusCode }}
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head: vm => ({
    title: `Error ${vm.error.statusCode}`,
  }),
}
</script>
