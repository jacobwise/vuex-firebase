import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store' // vuex store instance

// install router
Vue.use(VueRouter)

// create router
const router = new VueRouter({
  hashbang: true
})

// configure router
configRouter(router)

sync(store, router) // done.

// boostrap the app
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')
/* eslint-disable no-new */
