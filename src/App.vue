<template>
    <div class="table">

      <table-filters-bar v-on:searchEvent="searchEvent($event)"
                         :columns="columns">
      </table-filters-bar>

      <hr style="border: 1px solid black;">
      <table-header :columns="columns"></table-header>

      <template v-if="tableBodyLoaded">
        <table-body :searchParams="searchingText"
                    :bodyData="bodyData"
                    :columns="columns">
        </table-body>
      </template>
      <template v-else="!tableBodyLoaded">
        Загрузка...
      </template>

    </div>
</template>

<script>

import Rest from './services/rest-service.js';
import DropdownService from './services/dropdown-service.js';
import TextService from './services/text-service.js';

import TableFiltersBar from './components/TableFiltersBar.vue';
import TableHeader from './components/TableHeader.vue'
import TableBody from './components/TableBody.vue';

export default {

  name: 'App',
  components: {
    TableFiltersBar,
    TableHeader,
    TableBody
  },
  data () {
    return {
      rest: new Rest(),
      textService: new TextService(),
      columns: new DropdownService().getAllColumns(),
      tableBodyLoaded: false,
      bodyData: [],
      searchingText: ''
    }
  },
  mounted() {
     const url = 'json.json';
     this.rest.getAllData(url)
        .then(response =>  {
          this.bodyData = response;
          this.tableBodyLoaded = true;
          if (this.bodyData)
            this.textService.translateInspection(this.bodyData);
    });
  },
  methods: {
    searchEvent(e) {
      this.searchingText = e;
    }
  }
}
</script>

<style>

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.table {
  padding: 10px 0 10px 0;
  margin: 0 auto;
  width: 75%;
  height: 45%;
  border: 2px solid black;
  border-radius: 3px;
}

</style>
