<template>
  <v-container>
    <v-main>
      <the-header></the-header>
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10"  >
             <v-window>
                <v-window-item>
                  <v-form @submit.prevent=" register" >
                  <v-row >
                    <v-col cols="12" md="6" class="blue rounded-br-xl">
                     <div style="  text-align: center; padding: 180px 0;">
                      <v-card-text class="white--text" >
                        <h3 class="text-center ">Already Signed up?</h3>
                        <h6
                          class="text-center"
                        >Log in to your Admin page and<br> check attendance </h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="login">Log in</v-btn>
                      </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Sign Up as Admin</h4>
                        <h6
                          class="text-center  grey--text "
                        >Fill all the required details</h6>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                          
                            <v-text-field
                            type="text"
                            v-model="first_name"
                            label="Admin Name"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-4"
                          />
                          <v-text-field
                            type="email"
                            v-model="email"
                            :rules="emailRules"
                            label="Email"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                          <v-text-field
                            v-model="password"
                            :rules="passwordRules"
                            label="Password"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                            :type="passwordShow ? 'text' : 'password'"
                            :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="passwordShow = !passwordShow"
                          
                          />
                           <v-text-field
                            type="number"
                            v-model="mob"
                            label="Mobile no:"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                          />
                           
                          <v-btn type="submit" id="register" color="blue" dark block tile>Sign up</v-btn>

                          </v-col>
                        </v-row>  
                      </v-card-text>   
                    </v-col>
                  </v-row>
                  </v-form>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
      </v-row>
      </v-main>
  </v-container>
</template>

<script>
 import TheHeader from '../components/TheHeader.vue'; 
import axios from 'axios'

  export default {
    components: { TheHeader},
   data: () => ({
    step: 1,
     isLoggingIn: false,
     snackbar: false,
      mob: '',
      first_name: '',
      passwordShow: false,
      valid: true,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
  }),

  methods: {
      register() {       
          axios.post('https://my--1.herokuapp.com/api/auth/admin-signup', {
                    "username" : this.email,
                    "password": this.password,
                    "email": this.email
              }).then((response)=>{
                console.log(response.status);
                console.log(response.data);
                this.$router.push({name: 'admin'})
              }).catch((error)=>{
                 if(error.response.status === 422){
                  alert( `Email ID already registered.`)
                }
                console.log(error.response);
              });             
        },

      login(){
             this.$router.push({name: 'admin'})
           }  
      
  }

  }
</script>

<style scoped>
.v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
    border-bottom-right-radius: 300px !important;
}
header {
  width: 100%;
  height: 5rem;
  background-color: #1c81e6;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f6f6f6;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f2f0f2;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
/* login */

.widget {
    margin: 0;
    height: unset;
}
.login-panel {
    position: relative;
    padding: 200px 0;
}
.alert-primary {    
    color: rgb(34, 137, 233);
}
</style>