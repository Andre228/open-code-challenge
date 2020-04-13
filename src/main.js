import Vue from 'vue'
import App from './App.vue'
import  { components }  from './components-providers'

new Vue({
  el: '#app',
  components: components,
  render: h => h(App)
})
