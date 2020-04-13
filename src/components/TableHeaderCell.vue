<template>
    <div class="table-cell">
      {{ tableCellInfo.displayName }}
    </div>
</template>

<script>


export default {

  name: 'TableHeaderCell',
  props: ['itemInfo', 'len'],
  data () {
    return {
      tableCellInfo: this.itemInfo
    }
  },
   mounted() {
  }
}
</script>

<style>

.cell-container {
  display: flex;
  flex-direction: row;
}

.table-cell {
  width: 230px;
  padding: 2px 4px 2px 4px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid gray;
}

</style>
