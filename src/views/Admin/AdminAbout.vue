<template>
  <v-app id="adminabout">

    <v-navigation-drawer
      v-model="drawer"
      app
    >

    <v-img src="about.jpg">
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
    
    <v-app-bar app color="blue darken-1" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title style="width:10 5px">About</v-app-bar-title>
      <v-spacer></v-spacer>
  
    </v-app-bar>

     <v-img
      src="background.jpg"
       gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)"
    >
        <div class="about pa-6">
              <h1>About Attendance </h1>
              <h3>Recording student attendance in educational institutions is a tedious,
                 manual process that is both time-consuming and error prone. 
                 We have developed an app to capture student attendance. 
                 During each class session, the students will point their device at a unique QR Code 
                 displayed on the system. Each student’s attendance will be recorded immediately on the App. 
                 The app has been developed using Vue.Js, Flutter and Spring Boot. 
                 The mobile app capture the QR Code and mark attendance of every individual.
                 The QR Code added to a system enables display of the appropriate QR Code for each class session.
                 We conclude that it is possible to develop an app that records student attendance using QR codes and institutional information systems. 
                 Implemented efficiently, student attendance can be recorded accurately and effectively, saving class time. 
                 Overall user satisfaction with the system was high, demonstrating that information technology can positively drive and support change in education system.
              </h3>
              <!-- <h3>page under development....</h3> -->
        </div>
        
        <v-container>
          <v-row>
            <v-col>
        <!-- <v-card>
          <div class="about pa-6">
              <v-img src="https://www.kindpng.com/picc/m/145-1455678_making-websites-web-development-services-hd-png-download.png"
              gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)">
              <h3>Recording student attendance in educational institutions is a tedious,
                 manual process that is both time-consuming and error prone. 
                 We have developed an app to capture student attendance. 
                 During each class session, the students will point their device at a unique QR Code 
                 displayed on the system. Each student’s attendance will be recorded immediately on the App. 
                 The app has been developed using Vue.Js, Flutter and Spring Boot. 
                 The mobile app capture the QR Code and mark attendance of every individual.
                 The QR Code added to a system enables display of the appropriate QR Code for each class session.
                 We conclude that it is possible to develop an app that records student attendance using QR codes and institutional information systems. 
                 Implemented efficiently, student attendance can be recorded accurately and effectively, saving class time. 
                 Overall user satisfaction with the system was high, demonstrating that information technology can positively drive and support change in education system.
              </h3>
                 </v-img>
        </div>
        </v-card> -->
        </v-col>
        <v-col>
         <v-row >
          <v-col>
        <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Front End
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Vue.Js
        </v-list-item-title>
        <v-list-item-subtitle>Developed by Binil and Kanishma</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
      
      ><v-img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbsExAg2QWktx-MsOm5nrK0WGEgpUkEM2BtQ&usqp=CAU"
    ></v-img></v-list-item-avatar>
    </v-list-item>
  </v-card><br>
          </v-col>
          <v-col>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Front End
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Flutter
        </v-list-item-title>
        <v-list-item-subtitle>Developed by Deepak and Niketh</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
      
      ><v-img
      src="data:image/png;base64,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"
    ></v-img></v-list-item-avatar>
    </v-list-item>
  </v-card><br>
          </v-col>
          <v-col>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Back End
        </div>
        <v-list-item-title class="text-h5 mb-1">
          Spring Boot
        </v-list-item-title>
        <v-list-item-subtitle>Developed by Akhil and Sreehari</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
      
      ><v-img
      src="data:image/png;base64,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"
    ></v-img></v-list-item-avatar>
    </v-list-item>
  </v-card>
          </v-col>
         </v-row>
  </v-col>
  </v-row>
  </v-container>
     </v-img>
  </v-app>
</template>

<script>
  export default {
   data: () => ({ 
    show: false,
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
     }), 
   
  }
</script>
