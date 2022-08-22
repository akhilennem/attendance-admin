
<template>
  <v-app id="adminhome">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
      <v-img src="home.webp">
         <div class="text-center"></div>
      </v-img>

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
     
   
    <v-app-bar app color="blue darken-1" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

       <v-app-bar-title>Home</v-app-bar-title>
      <v-spacer></v-spacer>
      <router-link to="/adminregister">
      <v-btn color="white" dark class="blue--text">Add Admin</v-btn>
      </router-link>
      <log-out></log-out>
      
 
    </v-app-bar>

    <v-img
     
      src="background.jpg"
    >
<v-row>
  <v-col lg="12" cols="12">
    
     <v-alert
      dense
      text
      type="success"
    >
      <strong>Login Successfully:</strong> Welcome! Namaskar
      </v-alert>

    <homepage-card></homepage-card>
    <home-activities></home-activities>
     
  </v-col>
</v-row>
    </v-img>
  </v-app>
</template>

<script>

import LogOut from '../components/LogOut';
import HomepageCard from '../components/HomepageCard'
import HomeActivities from '../components/HomeActivities'

  export default {
    name: 'adminhome',
    components: {
      LogOut, 
      HomepageCard,
      HomeActivities
      },

   data: () => ({
     drawer: null,
   
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
 
  }
</script>
<style>

</style>
        