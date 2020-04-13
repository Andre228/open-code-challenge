<template>
    <div>
      <div>
          <table-row v-for="(item, index) in filteredRows"
                     :key="index"
                     :rowInfo="item"
                     :columns="columns">
          </table-row>
      </div>
      <div v-if="!isAllInvisible()" class="table-body-footer">
        Всего элементов: {{ filteredRows.length }}
      </div>
      <div v-else class="table-body-footer">
        Отображаемые данные отсутствуют
      </div>
    </div>
</template>

<script>

import DropdownService from '../services/dropdown-service.js';

import TableRow from './TableRow.vue';

export default {

  name: 'TableBody',
  props:['bodyData', 'columns', 'searchParams'],
  components: {
    TableRow
  },
  data () {
    return {
      tableRows: this.bodyData,
      headerDisplayNames: [],
      searchingText: this.searchParams,
      dropdownService: new DropdownService()
    }
  },
  mounted() {
    this.headerDisplayNames = this.columns;
    this.tableRows = this.bodyData;
  },
  computed: {
      filteredRows: {
      get: function () {
        return this.tableRows.filter(tableRow => {
          return tableRow.business_name.toLocaleLowerCase().match(this.searchingText) ||
                 tableRow.business_address.toLocaleLowerCase().match(this.searchingText) ||
                 tableRow.business_city.toLocaleLowerCase().match(this.searchingText) ||
                 tableRow.business_phone_number.toLocaleLowerCase().match(this.searchingText) ||
                 tableRow.inspection_date.toLocaleLowerCase().match(this.searchingText) ||
                 tableRow.inspection_description.toLocaleLowerCase().match(this.searchingText) ||
                 tableRow.inspection_type.toLocaleLowerCase().match(this.searchingText)
        });
      }
    }
  },
  watch: {
    searchParams(newVal, oldVBal) {
      this.searchingText = newVal.toLocaleLowerCase();
    }
  },
  methods: {
    isAllInvisible() {
      return this.dropdownService.isAllInvisible(this.headerDisplayNames);
    }
  }
}
</script>

<style>

.table-body-footer {
  margin-top: 8px;
  margin-right: 8px;
  display: flex;
  justify-content: flex-end;
}

</style>
