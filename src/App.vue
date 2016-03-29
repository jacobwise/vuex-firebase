<template>
  <div>
    <div class="header">
      Header
    </div>

    <div class="main-section">
      <navigation></navigation>
      <div class="content">
        <router-view class="view" 
                     transition="fade" 
                     transition-mode="out-in" 
                     keep-alive 
                     :store="store">
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Firebase from 'firebase'
import * as actions from './vuex/actions'
import store from './vuex/store'
var ref = new Firebase('https://swellfire-daily.firebaseio.com/projects')

export default {
  store,
  ready: function () {
    this.listenAuth()
    this.checkAuth()
  },
  vuex: {
    actions,
    getters: {
      authData: state => state.authData
    }
  },
  components: {
    Navigation
  },
  watch: {
    authData (val) {
      if (!val) {
        this.redirectLogin
        this.$route.router.go('/login')
      }
    }
  },
  methods: {
    listenAuth: function () {
      ref.onAuth(function (authData) {
        this.changeAuth(authData)
      }.bind(this))
    },
    checkAuth: function () {
      this.$route.router.beforeEach(({to, next, abort, redirect}) => {
        if (this.authData) {
          if (to.path === '/login') { redirect('/') }
          next()
        } else {
          if (to.path === '/login') { next() }
          redirect('/login')
        }
      })
    }
  }
}
</script>
<style type="text/css">
  body {
    font-family: 'Roboto', sans-serif;
  }
  .main-section {
    margin-top: 50px;
  }
  .header {
    position: fixed;
    top: 0;
    height: 50px;
    width: 100%;
    background: #fff;
    z-index: 9;
  }
  .content {
    margin: 20px 20px 20px 290px;
    width: calc(100% - 310px);
    float: left;
  }
</style>
