<template>
  <div class="login">

    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="wrapper">
            <!-- Already logged in -->
            <div class="logged-in" v-if="authData">

              <h2><div class="glyphicon glyphicon-ok"></div> You are logged in</h2>
            </div>

            <!-- Login Form -->
            <form class="form-signin" @submit.prevent="login" v-if="!authData" >
              <div class="loading" v-if="authenticating">
                <div class="glyphicon glyphicon-repeat"></div>
              </div>       
              <h2 class="form-signin-heading">Login</h2>
              <input type="text" v-model="email" class="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
              <input type="password" v-model="password" class="form-control" name="password" placeholder="Password" required=""/>      
              <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>   
            </form>
          </div>
        </div>     
      </div>
    </div> <!-- /container -->

  </div>
</template>

<script>
import Firebase from 'firebase'
var ref = new Firebase('https://swellfire-daily.firebaseio.com/')

export default {
  data () {
    return {
      email: '',
      password: '',
      authenticating: false
    }
  },

  vuex: {
    getters: {
      authData: state => state.authData
    }
  },

  methods: {

    login: function () {
      this.authenticating = true
      ref.authWithPassword({
        email: this.email,
        password: this.password
      }, function (error, authData) {
        if (error) {
          console.log('Login Failed!', error)
        } else {
          console.log('Authenticated successfully with payload:', authData)
        }
        this.authenticating = false
      }.bind(this))
    }

  }
}
</script>

<style type="text/css">
  body {
    background: #eee;
  }

  .wrapper {
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .logged-in {
    max-width: 380px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-content: center;
    height: 300px;
    align-items: center;
    text-align: center;
  }

  .logged-in h2 { 
    width: 100%;
    text-align: center; 
  }

  .loading {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: absolute;
    z-index: 999;
    display: flex;
    align-items: center;
    align-content: center;
    text-align: center;
  }

  .loading .glyphicon {
    width: 100%;
    font-size: 40px;
    -webkit-animation-name: spinnerRotate;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spinnerRotate;
    -moz-animation-duration: 2s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spinnerRotate;
    -ms-animation-duration: 2s;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
  }

  @-webkit-keyframes spinnerRotate
  {
      from{-webkit-transform:rotate(0deg);}
      to{-webkit-transform:rotate(360deg);}
  }
  @-moz-keyframes spinnerRotate
  {
      from{-moz-transform:rotate(0deg);}
      to{-moz-transform:rotate(360deg);}
  }
  @-ms-keyframes spinnerRotate
  {
      from{-ms-transform:rotate(0deg);}
      to{-ms-transform:rotate(360deg);}
  }

  .form-signin {
    max-width: 380px;
    padding: 15px 35px 45px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;
  }
  .form-signin .form-signin-heading,
  .form-signin .checkbox {
    margin-bottom: 30px;
    text-align: center;
  }
  .form-signin .checkbox {
    font-weight: normal;
  }
  .form-signin .form-control {
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="text"] {
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 20px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
