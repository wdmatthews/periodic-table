<template>
  <div>
    <ViewControls @set-view="view = $event" />
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
          :element="elements[row.firstElement + c - 1]"
          :view="view"
        />
        <EmptyCell
          v-if="row.middle > 0"
          :column-size="row.middle"
        />
        <TableCell
          v-for="c in row.right"
          :key="`row-${r}-right-${c}`"
          :element="elements[row.firstElement + row.left + c - 1]"
          :view="view"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import { rows } from '@/assets/data/grid'
import elements from '@/assets/data/elements'

export default {
  data: vm => ({
    rows,
    elements,
    view: '',
  }),
}
</script>
