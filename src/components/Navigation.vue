<template>
  <div id="sidebar" class="navigation">
    <nav>
        <ul>
          <li :class="{'active': $route.router.path === '/login'}">
            <a v-link="{ name: 'home' }" href="#"><i class="glyphicon glyphicon-th-list"></i> All Projects</a>
          </li>
          <li v-if="!authData">
            <a v-link="{ name: 'login' }" href="#"><i class="glyphicon glyphicon-th-list"></i> Login</a>
          </li>
          <li v-if="!authData">
            <a v-link="{ name: 'register' }" href="#"><i class="glyphicon glyphicon-th-list"></i> Register</a>
          </li>
          <li v-if="authData">
            <a @click.prevent="logout" href="#"><i class="glyphicon glyphicon-log-out"></i> Logout</a>
          </li>
        </ul>
    </nav>
  </div>
</template>

<script>
import Firebase from 'firebase'
var ref = new Firebase('https://swellfire-daily.firebaseio.com/')

export default {
  vuex: {
    getters: {
      authData: state => state.authData
    }
  },
  methods: {
    logout: function () {
      ref.unauth()
    }
  }
}
</script>

<style type="text/css">
  #sidebar {
    width: 270px;
    position: fixed;
    left: 0;
    top: 50px;
    height: 100%;
    background-color: #191c22;
  }

  #sidebar nav ul {
    list-style: none;
    padding: 0;
  }

  #sidebar nav ul li {
    width: 100%;
    display: block;
  }
    
  #sidebar nav li a {
    display: block;
    padding: 9px 10px 9px 16px;
    position: relative;
    white-space: nowrap;
    -webkit-transition: color;
    -o-transition: color;
    transition: color;
    color: #9ba1b1;
  }

  #sidebar nav li.active a {  
    background: #121419;
  }

  #sidebar nav li a:hover {  
    text-decoration: none;
    color: #fff;
  }

  #sidebar nav li i {
    font-size: 10px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #000;
    line-height: 29px;
    margin-right: 7px;
    text-align: center;
    display: inline-block;
  }

  #sidebar nav li.active i {
    background-color: #2C313A;
  }
      
</style>

