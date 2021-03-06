<template>
  <div>
    <ViewControls @set-view="view = $event" />
    <div
      class="pa-1"
      style="position: relative;"
    >
      <div style="position: absolute; width: 100%; z-index: 2; pointer-events: none;">
        <v-row no-gutters>
          <v-col cols="2" />
          <TableGroupings :view="view" />
          <v-col cols="3">
            <TableKey
              :element="selectedElement"
              :atomic-number="selectedANumber"
              :view="view"
            />
          </v-col>
        </v-row>
      </div>
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
          :block="getBlock(c, r)"
          :atomic-number="row.firstANumber + c - 1"
          @select-element="selectElement"
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
          :block="getBlock(c + row.left + row.middle, r)"
          :atomic-number="(r == 5 || r == 6)
            ? rows[r + 2].firstANumber + c + rows[r + 2].left - 1
            : row.firstANumber + c + row.left - 1"
          @select-element="selectElement"
        />
      </v-row>
      <v-row
        v-show="view == 'Trends'"
        no-gutters
      >
        <v-col cols="4">
          <TrendArrow
            label="Atomic Size"
            negative
          />
        </v-col>
        <v-col cols="4">
          <TrendArrow
            label="Electronegativity"
          />
        </v-col>
        <v-col cols="4">
          <TrendArrow
            label="Ionization Energy"
          />
        </v-col>
      </v-row>
      <v-row
        v-show="view == 'Trends'"
        no-gutters
        style="transform: translate(145%, -100%) rotate(90deg); position: absolute; top: 45%; width: 50%;"
      >
        <v-col cols="4">
          <TrendArrow
            label="Electronegativity"
            negative
          />
        </v-col>
        <v-col cols="4">
          <TrendArrow
            label="Ionization Energy"
            negative
          />
        </v-col>
        <v-col cols="4">
          <TrendArrow
            label="Atomic Size"
          />
        </v-col>
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
    selectedElement: elements[0],
    selectedANumber: 1,
  }),
  methods: {
    getBlock(group, period) {
      if (period > 6 && group === 1) { return (period - 2) + 'd' }
      if (period > 6) { return (period - 3) + 'f' }
      if (group < 3 || (group === 18 && period === 0)) { return (period + 1) + 's' }
      if (group < 13) { return period + 'd' }
      return (period + 1) + 'p'
    },
    selectElement({ element, atomicNumber }) {
      this.selectedElement = element
      this.selectedANumber = atomicNumber
    },
  },
}
</script>
