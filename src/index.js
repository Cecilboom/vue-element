import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import './style.css'





sync(store,router)
const app = new Vue({
  router,
  store,
  ...App
})

app.$mount('#app')

export { app }
