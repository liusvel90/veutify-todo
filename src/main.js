import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import vueUUID from './plugins/vueUUID';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vueUUID,
  render: h => h(App)
}).$mount('#app')


/* Hot Reaload clean up */
