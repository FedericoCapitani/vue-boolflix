import Vue from 'vue'
import App from './App.vue'
import LangFlag from 'vue-lang-code-flags';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar as fasStar} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar} from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fasStar, farStar);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component('lang-flag', LangFlag);
const bootstrap = require('bootstrap')
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
