<template>
    <div class="table-dropdown">
        <div class="title-dropdown-item" @click="isShow = !isShow">
          <a>{{ title }}</a>
        </div>
        <transition name="show" appear>
          <div ref="subMenu" class="sub-menu" v-if="isShow">
            <div v-for="column in columns" @click="updateColumn(column)"  :key="column.fieldName" class="dropdown-item">
                <small v-if="!column.isVisible" class="disable-column"></small>
                <small v-if="column.isVisible" class="active-column"></small>
                <a>{{ column.displayName }}</a>
            </div>
          </div>
        </transition>
    </div>
</template>

<script>

import DropdownService from '../services/dropdown-service.js';

export default {

  name: 'Dropdown',
  props: ['columns','title'],
  data () {
    return  {
      isShow: false,
      dropdownColumns: this.columns
    }
  },
   mounted() {

  },
  created () {
    window.addEventListener('click', this.documentClick);
   },
  destroyed () {
    window.removeEventListener('click', this.documentClick);
 },
  methods: {
    showHideDropdown() {

    },
    documentClick(e) {
      if (!this.$el.contains(e.target)) {
        this.isShow = false;
      }
    },
    updateColumn(column) {
      column.isVisible = !column.isVisible;
    }
  }
}
</script>

<style>

a {
  cursor: pointer;
  text-decoration: none;
  color: black;
}

.title-dropdown-item {
  padding: 6px 40px 6px 40px;
  border: 1px solid gray;
}

.title-dropdown-item:hover {
  cursor: pointer;
  transition: .2s;
  background-color: #e3e3e1;
}

.dropdown-item {
  width: 255px;
  border-bottom: 1px solid gray;
}

.dropdown-item:hover {
  cursor: pointer;
  transition: .2s;
  background-color: #e3e3e1;
}

.sub-menu {
  position: absolute;
  background-color: white;
  border-top: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.active-column::after {
  margin-left: 5px;
  content: '\2713';
  font-size: 20px;
  color: gray;
}

.disable-column::after {
  margin-left: 5px;
  content: '\2715';
  font-size: 20px;
  color: gray;
}

</style>
