<template>
    <div class="filters-bar">
        <strong class="table-name">Инспекция по ресторанам</strong>
        <dropdown :title="'Редактировать таблицу'"
                  :columns="columnsSettings">
        </dropdown>
        <input :input="searchEvent()"
               class="search-table-input"
               type="text" v-model="search"
               name=""
               value=""
               placeholder="Поиск по полям таблицы"/>
    </div>
</template>

<script>

import Dropdown from './Dropdown.vue';
import DropdownService from '../services/dropdown-service.js';

export default {

  name: 'TableFiltersBar',
  props: ['columns'],
  components: {
    Dropdown
  },
  data () {
    return {
      columnsSettings: this.columns,
      search: ''
    }
  },
   mounted() {

  },
  computed: {
  },
  methods: {
    searchEvent(event) {
      this.$emit('searchEvent', this.search);
    }
  }
}
</script>

<style>

.table-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.filters-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 35px 0 35px;
}

.search-table-input {
  padding-left: 15px;
  transition: .3s ease-out;
  width: 18%;
}

.search-table-input:focus {
  width: 45%;
}

</style>
