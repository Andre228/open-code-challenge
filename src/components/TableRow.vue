<template>
    <div :class="[isAllInvisible() ? 'table-empty' : 'table-row']" class="table-row">
      <table-cell-body v-for="(item, name, index) in rowData"
                       v-if="isVisibleCell(name)"
                       :key="index"
                       :itemInfo="item">
      </table-cell-body>
    </div>
</template>

<script>

import DropdownService from '../services/dropdown-service.js';

import TableCellBody from './TableCellBody.vue';

export default {

  name: 'TableRow',
  props:['rowInfo', 'columns'],
  components: {
    TableCellBody
  },
  data () {
    return {
      rowData: this.rowInfo,
      columnsInfo: [],
      dropdownService: new DropdownService()
    }
  },
  mounted() {
    this.columnsInfo = this.columns;
  },
  methods: {
    isVisibleCell(columnFieldName) {
      let isVisibleCell = this.columnsInfo.find(item => item.fieldName === columnFieldName);
      if (isVisibleCell && isVisibleCell.isVisible) return true;
      else return false;
    },
    isAllInvisible() {
      return this.dropdownService.isAllInvisible(this.columnsInfo);
    }
  },
  watch: {
    rowInfo(newVal) {
      this.rowData = newVal;
    }
  }

}
</script>

<style>

.table-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid #cfcdd1;
}

.table-empty {
  border: 0;
}

.table-row:hover {
  transition: .2s;
  background-color: #dedbca;
  cursor: pointer;
}

</style>
