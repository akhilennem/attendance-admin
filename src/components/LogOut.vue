<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-logout</v-icon>
              Logout
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Confirm Logout
        </v-card-title>
        <v-card-text>Are you sure you want to logout?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red darken-1"
            text
            @click="$router.push({name: 'admin'})"
          >
            Yes
          </v-btn>
        </v-card-actions> 
      </v-card>
    </v-dialog>
</template>

<script>
export default ({
    data: () => ({
     dialog: false
    })
})
</script>