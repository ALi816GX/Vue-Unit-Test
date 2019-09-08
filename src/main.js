import Vue from 'vue';
import Vuex from 'vuex'
import App from './TodoList.vue'
import Store from './store/store'

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        Store
    }
});

new Vue({

    render: h => h(App),
    store:store

}).$mount('#app');