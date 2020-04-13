<template>
    <div>
      <div class="table-header">
        <table-header-cell v-for="item in getVisibleDisplayNames"
                           :key="item.fieldName"
                           :itemInfo="item"
                           :len="headerDisplayNames.length">
        </table-header-cell>
      </div>
      <hr>
    </div>
</template>

<script>

import TableHeaderCell from './TableHeaderCell.vue';

export default {

  name: 'TableHeader',
  props: ['columns'],
  components: {
    TableHeaderCell
  },
  data () {
    return {
        headerDisplayNames: this.columns
    }
  },
  mounted() {
  },
  computed: {
    getVisibleDisplayNames() {
      return this.headerDisplayNames = this.columns.filter(column => column.isVisible);
    }
  }

}
</script>

<style>

.table-header {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.table-header .table-cell:last-child {
  border-right: 0;
}

</style>
