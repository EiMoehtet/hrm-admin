 
<template>
   <v-dialog
      v-model="dialog"
      width="500"
    >
    
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
         <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline">
          Edit Basic Info
        </v-card-title>

        <v-card-text>
           <v-text-field prepend-icon="mdi-account" label="Name:" type="text" v-model="empName"   
           ></v-text-field>
         <v-text-field prepend-icon="mdi-email"  label="Email" type="text"  v-model="empEmail" ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1"  @click="dialog = false">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="onUpdateBasicInfo"
          >
           Save changes
          </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
import store from '@/store'
export default {
props:['id','name','email'],
    data(){
      return{
        dialog:false,
        empId:this.id,
        empName:this.name,
        empEmail:this.email
      }
    },
    methods:{
      hideModal(){
        this.$refs['my-modal'].hide()
      },
      onUpdateBasicInfo(){
        var formData={
          id:this.empId,
          name:this.empName,
          email:this.empEmail
        }
        console.log(formData);
        try{
          store.dispatch('updateBasicInfo',formData);
          this.dialog=false;
        }catch(err){
          console.log("Error")
        }
        
      }
    }
}
</script>



