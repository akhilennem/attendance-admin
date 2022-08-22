<template>
  <v-app id="adminattend">

    <v-navigation-drawer
      v-model="drawer"
      app
    >
     <v-img src="profile.jpg">
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

      <v-app-bar-title>Late Approve</v-app-bar-title>
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
      src="https://cdn2.vectorstock.com/i/1000x1000/28/36/being-late-for-work-cartoon-vector-25642836.jpg"
      gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)"
    >
    
<v-container>

      <v-row>
        <v-col>
           <v-data-table 
            :headers="teacher"
            :items="list"
            selectionMode="single"
            selectedClass="table-info"
            @selectionChanged="selectedRows = $event"
            :items-per-page="10"
            :search="search"
            
            item-key="id"
            v-model="selectedRows"
            @click:row="rowClicked"
          >   
         <template v-slot:item="{ item }">
            <tr :class="selectedRows.indexOf(item.email)>-1?'cyan lighten-4':''" @click="rowClicked(item)">
              <td>{{item.name }}</td>
              <td>{{item.email}}</td>
              <td>{{item.batch}}</td>
              <td @click="rowClicked(row)"></td>
            </tr>
          </template>
          </v-data-table>


         <v-row>
          <v-col>
      <v-form @submit.prevent="approveLate" ref="form">
      <v-btn :loading="isLoggingIn" type="submit" color="blue" dark  >Approve</v-btn>
        <v-snackbar top color="green" v-model="snackbar1">
          Approved
        </v-snackbar>
      </v-form>
          </v-col>

          <v-col md="10">
      <v-form @submit.prevent="revokeApprove" ref="data">
      <v-btn :loading="isLoggingIn2" type="submit" color="red" dark >Revoke</v-btn>
        <v-snackbar top color="red" v-model="snackbar2">
          Revoked
        </v-snackbar>
      </v-form> 
          </v-col>  
         </v-row>

        </v-col>
      </v-row>
    </v-container> 
  </v-img>
  </v-app>
</template>

<script>
import axios from 'axios';
var api= "https://my--1.herokuapp.com/";

  export default {
   data: () => ({ 
    isLoggingIn: false,
    isLoggingIn2: false,
     snackbar1: false,
     snackbar2: false,
     selectedRows: [],
     selected:'',
     search: '',
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
       teacher: [
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Batch', value: 'ebatch' }
        ],  
        list:[],
 
     }), 

     mounted() {
       this.getTodayAttendence();
     },
     methods:{
      getTodayAttendence(){
      axios.get(api+'api/rest/get-all')
      .then((response)=>{
        this.list=response.data;
        console.log(response.status);
        console.log(response.data);
      }).catch((error)=>{
        console.log(error);
      })          
     },

     rowClicked(row) {
      this.swapSelectionStatus(row.email);
      console.log(row.email);
      this.selected = row.email;
      },
      swapSelectionStatus(keyID) {
        if (this.selectedRows.includes(keyID)) {
          this.selectedRows = this.selectedRows.filter(
            selectedKeyID => selectedKeyID !== keyID
          );
        } 
        else {
          this.selectedRows.push(keyID);
        }
      },

      approveLate(){
        axios.post(api+'api/rest/leave',{
            "email": this.selected,
      })
      .then((response)=>{
        if(response.status == 200){
                 if( this.$refs.form.validate()){
                this.isLoggingIn = true
                
              setTimeout(() => {
                  this.isLoggingIn = false
                  this.snackbar1 = true
                
                  setTimeout(() => this.snackbar1 = false, 1000)
              }, 1000)
                console.log(response.status);
                console.log(response.data);
                console.log('APPROVED')
            }}
      }).catch((error)=>{
        console.log(error);
      }) 
      },

      revokeApprove(){
        axios.post(api+'api/rest/delete-leave',{
            "email": this.selected,
      })
      .then((response)=>{
        if(response.status == 200){
                 if( this.$refs.data.validate()){
                this.isLoggingIn2 = true
                
              setTimeout(() => {
                  this.isLoggingIn2 = false
                  this.snackbar2 = true
                
                  setTimeout(() => this.snackbar2 = false, 1000)
              }, 1000)
                console.log(response.status);
                console.log(response.data);
                console.log('revoked')
            }}
      }).catch((error)=>{
        console.log(error);
      }) 
      },

      },
  }
</script>
<style>

</style>