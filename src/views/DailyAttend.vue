<template>
  <v-app id="adminattend">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
     <v-img src="Attend.jpg">
      <div class="text-center">
     
      </div>
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
    
    <v-app-bar app color="blue darken-1" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Daily Attendance</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-col md="3">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          dark
        ></v-text-field>
      </v-col>
   
    </v-app-bar>

<v-img 
      src="attendanz.jpg"
      gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)"
    >
    
<v-container>
    <!-- <v-row>
      <v-col md="3">
        <router-link to="/individualAttend">
      <v-btn color="blue" class="white--text">View Individual Attendance</v-btn></router-link>
      </v-col>
    </v-row> -->
      <v-row>
        <v-col>
           <v-data-table 
            :headers="header"
            :items="list"
            :items-per-page="11"
            :search="search"
            default-footer
            class="elevation-1 mx-9"
          >   
          <li v-for="list in items" :key="list.id">  </li>  
    
       <td>{{list.name }}</td>
        <td>{{list.date }}</td>
        <td>{{list.time}}</td>
        <td>{{list.email}}</td>


        <!-- <template v-slot:item.actions="{ list }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(list)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(list)"
      >
        mdi-delete
      </v-icon>
    </template> -->
 
          </v-data-table>
        </v-col>
      </v-row>
    </v-container> 
  </v-img>
  </v-app>
</template>

<script>
import axios from 'axios'

  export default {
   data: () => ({ 
     search: '',
     drawer: null,
     items: [
          { title: 'Home', icon: 'mdi-home-outline' , to: '/adminhome'},
         // { title: 'Profile', icon: 'mdi-account-outline' ,to: '/adminprofile' },
          { title: 'Daily Attendance', icon: 'mdi-calendar-account-outline',to:'/dailyattend' },
          { title: 'Student Details', icon: 'mdi-account-multiple' , to: '/studentdetails' },
          { title: 'Individual Attendance', icon: 'mdi-card-account-details-outline' , to: '/individualattend' },
          { title: 'Late Approval', icon: 'mdi-account-clock-outline' , to: '/lateapprove' },
          { title: 'About', icon: 'mdi-information-outline' , to: '/adminabout' },
        ], 
     header: [
          {
            text: 'User Name',align: 'start',sortable: false,value: 'name'},
          { text: 'Email', value: 'email' },
          { text: 'Date', value: 'date' },
          { text: 'First In', value: 'first_In' },
          { text: 'First Out', value: 'first_out' },
          { text: 'Second In', value: 'second_In' },
          { text: 'Second Out', value: 'second_out' }
          // {text: 'Delete', value:'actions'}
        ],
        list:[],
 
     }), 

     mounted() {
       this.getTodayAttendence();
     },
     methods:{
      getTodayAttendence(){
      axios.get('https://my--1.herokuapp.com/api/rest/recent')
      .then((response)=>{
        this.list=response.data;
        console.log(response.status);
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      })          
     }
      },
  }
</script>
<style>

</style>
