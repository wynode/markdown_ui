import Vue from 'vue'
import App from './App.vue'
import HighLight from './highlight.js'

Vue.use(HighLight);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
