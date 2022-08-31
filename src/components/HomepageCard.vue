<template>
    <v-row>
        <v-col lg="3" cols="4" >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-card-text >
            <v-img src="profile.jpg"></v-img>

            </v-card-text>
            <v-card-actions>

              <v-btn
                text
                color="deep-purple accent-4"
              ><router-link to='/studentdetails'>
                Student Details</router-link>
              </v-btn>
             </v-card-actions>
           </v-card>
         </v-col>

         <v-col lg="3" cols="4" >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-card-text >
            <v-img src="Attendance.jpg"></v-img>

            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
              ><router-link to='/individualattend'>
                Month-wise Attendance</router-link>
              </v-btn>
             </v-card-actions>
           </v-card>
         </v-col>

         <v-col lg="3" cols="4" >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-card-text >
            <v-img src="calendar.jpg"></v-img>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
              ><router-link to='/datewiseattend'>
                Date-Wise Attendance</router-link>
              </v-btn>
             </v-card-actions>
           </v-card>
         </v-col>

         <v-col lg="3" cols="4" >
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-card-text >
            <v-img src="late1.jpg"></v-img>

            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="deep-purple accent-4"
              ><router-link to='/lateapprove'>
                Late Approval</router-link>
              </v-btn>
             </v-card-actions>
           </v-card>
         </v-col>
     </v-row>
</template>
