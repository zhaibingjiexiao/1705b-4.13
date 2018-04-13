import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
Vue.use(ElementUI);
import Vuer from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Vuer)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')