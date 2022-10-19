<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row align="center" justify="center" dense>
                    <v-col cols="12" sm="8" md="4" lg="4">
                        <v-card elevation="0">
                            <div class="text-center">
                                <br>
                                <h1 class="mb-2">Enter OTP</h1>
                            </div>
                            <a href="#">
                                <v-img src="https://codoid.com/wp-content/uploads/2021/04/How-to-automate-OTP-Scenario-in-Appium.jpg"></v-img>
                            </a>
                        <v-form @submit.prevent="enterOtp">
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
                            <v-text-field
                            v-model="otp"
                            label="OTP"
                            type="otp"
                            outlined
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-12"
                            prepend-inner-icon="mdi-lock-reset"
                          />
                          <v-btn type="submit" class="rounded-0" color="blue" x-large>
                            Reset Password
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
import axios from 'axios';

export default {
    data(){
        return{
            otp: '',
            email:''
        }
    },
    methods: {
        enterOtp() {
            axios.get('https://qr-scan2.herokuapp.com/api/mail/forget-password',{
                params:{
                "otp": this.otp,
                "email": this.email}
            }).then((response)=>{
                this.dates=response.data;
                console.log(response.status);
                console.log(response.data);
                this.$router.push({name: 'confirmpassword'})
            }).catch((error)=>{
                console.log(error);
            })            
        },
        
    }
    
}
</script>

<style lang="css" scoped>

</style>
