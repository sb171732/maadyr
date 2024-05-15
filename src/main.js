import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import bridge from '@vkontakte/vk-bridge';
Vue.config.productionTip = false
bridge.send("VKWebAppInit");
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
