<template>
 <v-dialog
      v-model="dialog"
      width="500"
    >
     <!-- <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      > -->
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
        <v-card-title class="headline grey lighten-2">
          Edit Employee Detail
        </v-card-title>

        <v-card-text>
        <v-text-field prepend-icon="mdi-cellphone-iphone" label="Mobile:" type="text"  v-model="empMobile"></v-text-field>
     
          <v-radio-group model="empGender">
           <v-radio label="Male:"   value="Male" ></v-radio>
           <v-radio label="Female"  value="Female" ></v-radio>
        </v-radio-group>
       
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="empDob"
            label="Date of Birth"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="empDob" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(empDob)">OK</v-btn>
        </v-date-picker>
        
        <v-text-field prepend-icon="mdi-map-marker" type="text"  v-model="empAddress"></v-text-field>
        </v-card-text>
  
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1"  @click="dialog = false">Cancel</v-btn>
          <v-btn
            color="primary"
            text
           @click="onUpdateEmployeeDetail"
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
    props:['id','mobile','gender','dob','address'],
    data(){
      return{
        dialog:false,
        empId:this.id,
        empMobile:this.mobile,
        empGender:this.gender,
        empDob:this.dob,
        empAddress:this.address,
        
      }
    },
    methods:{
     async onUpdateEmployeeDetail(){
        var formData={
          id:this.empId,
          mobile:this.empMobile,
          gender:this.empGender,
          dob:this.empDob,
          address:this.empAddress
        }
       try{
          await store.dispatch("updateEmployeeDetail",formData);
          this.dialog=false;
       }catch(err){
         console.log(err);
       }
       
      }
    }
}
</script>