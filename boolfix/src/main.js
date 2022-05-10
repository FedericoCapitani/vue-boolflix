import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';

Vue.component('lang-flag', LangFlag);
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
