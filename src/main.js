import Vue from 'vue'
import App from './TodoList.vue'
import Store from './store/store'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
    store:Store
}).$mount('#app');
