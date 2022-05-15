<template>
  <div>
    <ViewControls @set-view="view = $event" />
    <div
      class="pa-1"
      style="relative"
    >
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
          :period-number="c == 1 ? (r <= 6 ? r + 1 : r - 1) : 0"
          :group-number="(r == 0 || c > rows[r - 1].left && c <= groupCount - rows[r - 1].right && r < 4)
            ? c : 0"
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
          :group-number="(r == 0 || c + row.left + row.middle <= groupCount - rows[r - 1].right && r < 2)
            ? c + row.left + row.middle : 0"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import { rows, groupCount } from '@/assets/data/grid'
import elements from '@/assets/data/elements'

export default {
  data: vm => ({
    rows,
    groupCount,
    elements,
    view: '',
  }),
}
</script>
