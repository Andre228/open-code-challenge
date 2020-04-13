<template>
    <div class="table-cell-body">
      <span v-if="tableCellInfo">{{ tableCellInfo }}</span>
      <span v-else>--</span>
    </div>
</template>

<script>


export default {

  name: 'TableCellBody',
  props: ['itemInfo'],
  data () {
    return {
      tableCellInfo: this.itemInfo
    }
  },
  mounted() {
  },
  watch: {
    itemInfo(newVal) {
      this.tableCellInfo = newVal;
    }
  },
  filters: {
    'to-text': (value) => {

      }
    }
  }
</script>

<style>

.table-cell-body {
  width: 230px;
  padding: 10px 4px 10px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
