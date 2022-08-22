<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row align="center" justify="center" dense>
                    <v-col cols="12" sm="8" md="4" lg="4">
                        <v-card elevation="0">
                            <div class="text-center">
                                <br>
                                <h1 class="mb-2">Forgot Password</h1>
                            </div>
                            <a href="#">
                                <v-img src="https://img.freepik.com/free-vector/forgot-password-account-login-web-page-protection-security-key-access-system-smartphone-computer-flat-vector-illustration_2175-1416.jpg?w=2000" ></v-img>
                            </a>
                        <v-form @submit.prevent="forgot">
                            <v-text-field
                                v-model="email"
                                label="Email"
                                type="email"
                                outlined
                                dense
                                color="blue"
                                autocomplete="false"
                                class="mt-12"
                                prepend-inner-icon="email"
                          />
                          <v-btn type="submit" class="rounded-0" color="blue" x-large>
                            Send OTP
                            </v-btn>
                          </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import axios from 'axios'

export default {
    name:'app',
    data: () => ({
        email: '',
     }),
    methods: {
         forgot() {
             axios.get('https://my--1.herokuapp.com/api/mail/web-otp',{
                params:{
                "email": this.email,
                }
            }).then((response)=>{
                console.log(response.status);
                console.log(response.data);
                this.$router.push({name: 'otp'})
              }).catch((error)=>{
                console.log(error.response);
              }); 

            
        }
    },

}
</script>

<style lang="css" scoped>

</style>