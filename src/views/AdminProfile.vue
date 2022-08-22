<template>
  <v-app id="adminprofile">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
    <v-img src="profile.jpg">
      <div class="text-center"></div>
    </v-img>
    
      <!--  -->
       <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Admin
          </v-list-item-title>
          <v-list-item-subtitle>
            Side Menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <!-- <v-app-bar app color="blue darken-1" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
       <v-app-bar-title>Profile</v-app-bar-title>
    </v-app-bar> -->

       <v-img
     
      src="profilee.jpg"
      gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)"
    >
    <v-container align="center" justify="center" fill-height>
    <v-card 
    class="ma-auto"
   max-width="700"
    tile
  >   
      <v-row
        align="end"
        class="fill-height"        
      >       
        <v-col class="py-0" >
          
          <v-toolbar
      flat
      color="blue" dark
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
       <h4> Admin Profile</h4>
      </v-toolbar-title>
      <v-spacer></v-spacer>
           <v-btn
        color="blue"
        fab
        small
        @click="isEditing = !isEditing"
      >
        <!-- <v-icon v-if="isEditing">
          mdi-close
        </v-icon> -->
        <v-icon>
          mdi-pencil
        </v-icon>
      </v-btn>
      </v-toolbar>
          <v-list-item
            color="rgba(0, 0, 0, .4)"
            
          >
            <v-list-item-content>
              <v-list-item-title class="text-h6">
               Name
              </v-list-item-title>
            
              <v-list-item-subtitle>Admin</v-list-item-subtitle>
              <v-form @submit.prevent=" profile">
                          <v-text-field
                            type="text"
                            v-model="name"
                            label="Admin Name"
                            prepend-inner-icon="email"
                            dense
                            color="blue" 
                            autocomplete="false"
                           class="mt-4"
                           :disabled="!isEditing"
                          />
                          <v-text-field
                            type="text"
                            v-model="email"
                            label="Email"
                            prepend-inner-icon="email"
                            dense
                            color="blue" 
                            autocomplete="false"
                           class="mt-4"
                           :disabled="!isEditing"
                           
                          />
                          <v-spacer></v-spacer>
                          <v-text-field
                            type="number"
                            v-model="mob"
                            label="Mobile"
                            prepend-inner-icon="phone"
                            dense
                            color="blue"
                            autocomplete="false"
                            class="mt-4"
                           :disabled="!isEditing"
                            
                          />
                          <v-spacer></v-spacer>
                          <v-text-field
                            type="text"
                            v-model="work"
                            label="Work"
                           prepend-inner-icon="work"
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                           :disabled="!isEditing"
                           
                          />
                          <v-spacer></v-spacer>
                          <v-text-field
                            type="text"
                            v-model="address"
                            label="Address"
                            prepend-inner-icon="home"
                            dense
                            color="blue"
                            autocomplete="false"
                           class="mt-4"
                           :disabled="!isEditing"
                          
                          />
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
      type="submit"
      id="profile"
        :disabled="!isEditing"
        color="success"
        @click="save"
      >
        Save
      </v-btn>
    </v-card-actions>
    </v-form>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Your profile has been updated
    </v-snackbar>
                          
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
  </v-card>
  </v-container>
  </v-img>
      <!-- <router></router> -->
  </v-app>
</template>

<script>
import axios from 'axios'

  export default {
    props: [''],
   data: () => ({ 
     drawer: null,
     hasSaved: false,
     isEditing: null,
    
       name: '',
       email: '',
       mob:'',
       work:'',
       address:'',

     items: [
          { title: 'Home', icon: 'mdi-home-outline' , to: '/adminhome'},
          //{ title: 'Profile', icon: 'mdi-account-outline' ,to: '/adminprofile' },
          { title: 'Daily Attendance', icon: 'mdi-calendar-account-outline',to:'/dailyattend' },
          { title: 'Student Details', icon: 'mdi-account-multiple' , to: '/studentdetails' },
          { title: 'Individual Attendance', icon: 'mdi-card-account-details-outline' , to: '/individualattend' },
          { title: 'Late Approval', icon: 'mdi-account-clock-outline' , to: '/lateapprove' },
          { title: 'About', icon: 'mdi-information-outline' , to: '/adminabout' },
        ], 
     }), 
   
   methods: {
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },


      profile() {       
          axios.post('https://my--1.herokuapp.com/api/rest/update-profile', {
                    "name" : this.name,
                    "email": this.email,
                    "designation": this.work,
                    "phone": this.mob,
                    "address": this.address
              }).then((response)=>{
                console.log(response.status);
                console.log(response.data);
                console.log("kjsds")
                this.isEditing = !this.isEditing
        this.hasSaved = true
              }).catch((error)=>{
                console.log(error.response);
              });             
        },
   }

  }
</script>

<style>

</style>

