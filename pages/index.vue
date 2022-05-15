<template>
  <div>
    <ViewControls ref="viewControls" />
    <div class="pa-1">
      <v-row
        v-for="(row, r) in rows"
        :key="`row-${r}`"
        no-gutters
        justify="center"
      >
        <TableCell
          v-for="c in row.left"
          :key="`row-${r}-left-${c}`"
        />
        <EmptyCell
          v-if="row.middle > 0"
          :column-size="row.middle"
        />
        <TableCell
          v-for="c in row.right"
          :key="`row-${r}-right-${c}`"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import { rows } from '@/assets/data/grid'

export default {
  data: vm => ({
    rows,
  }),
  computed: {
    view() {
      return this.$refs.viewControls ? this.$refs.viewControls.view : ''
    },
  },
}
</script>
