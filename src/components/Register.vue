<template>
  <div class="register">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="wrapper">
            <form class="form-signin" @submit.prevent="register">       
              <h2 class="form-signin-heading">Register</h2>
              <input type="text" v-model="email" class="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
              <input type="password" v-model="password" class="form-control" name="password" placeholder="Password" required=""/>      
              <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>   
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
      email: 'jacob@swellfire.com',
      password: 'dust in the wind'
    }
  },

  methods: {

    register: function () {
      ref.createUser({
        email: this.email,
        password: this.password
      }, function (error, userData) {
        if (error) {
          console.log('Error creating user:', error)
        } else {
          console.log('Successfully created user account with uid:', userData.uid)
        }
      })
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

  .form-signin {
    max-width: 380px;
    padding: 15px 35px 45px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
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
