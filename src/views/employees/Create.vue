<template>
 <div>
<v-card-container>
<v-card>
  <v-card-title>
    Create Employee
  </v-card-title>
  <v-card-text>
    
    <v-form @submit.prevent="onSubmit">
      <p class="alert alert-danger" v-if="error">{{errorMessage}}</p>
      
        <v-text-field
        prepend-icon="mdi-account" 
        label="Name:"
        type="text" 
        v-model="name" 
        :error-messages="nameErrors"
        @input="$v.name.$touch()" 
        @blur="$v.name.$touch()"
           
           ></v-text-field>
        <v-text-field prepend-icon="mdi-email"  label="Email" type="text"  v-model="email"  @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
        <v-text-field prepend-icon="mdi-lock" label="Password:" type="password"  v-model="password"></v-text-field>
        <v-text-field prepend-icon="mdi-cellphone-iphone" label="Mobile:" type="text"  v-model="mobile"></v-text-field>
     
          <v-radio-group model="gender">
           <v-radio label="Male:"  v-model="gender" value="Male" ></v-radio>
           <v-radio label="Female"  v-model="gender" value="Female" ></v-radio>
        </v-radio-group>
         <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dob"
            label="Date of Birth"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="dob" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
        <v-text-field prepend-icon="mdi-map-marker" type="text"  v-model="address"></v-text-field>
        <v-btn type="submit" color="primary" block>Submit</v-btn>
     
      </v-form>
      
       
        </v-card-text>
        </v-card>
        </v-card-container>
      
         </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
import {myMixin} from '@/mixins/exampleMixin.js'
import { validationMixin } from 'vuelidate'
import { required, minLength,email } from 'vuelidate/lib/validators'
export default {
  mixins:[myMixin,validationMixin],
  validations:{
    name:{
      required,
      minlength:minLength(4)
    },
    email:{
      required,
      email
    }
  },
  data(){
    return{
      name:null,
      email:null,
      password:null,
      mobile:null,
      gender:null,
      dob:null,
      address:null,
      error:false,
      errorMessage:null,
      menu:null
      
    }
  },
  computed:{
    nameErrors(){
      var errorMessages=[];
      if(!this.$v.name.$dirty){
        return errorMessages;
      }
      if(!this.$v.name.required){
        errorMessages.push("Name is required");
      }
      if(!this.$v.name.minlength){
        errorMessages.push("Name must be at least 4 characters");
      }
      return errorMessages;
    }
  },
  methods:{
    async onSubmit(){
      this.error=false;
      this.errorMessage=null;
      var formData={
        name:this.name,
        email:this.email,
        password:this.password,
        mobile:this.mobile,
        gender:this.gender,
        dob:this.dob,
        address:this.address,
      }
    
    try{
        await store.dispatch('createEmployee',formData);
         this.name=null;
         this.email=null;
          this.password=null;
          this.mobile=null,
          this.gender=null,
          this.dob=null,
          this.address=null
          router.push({name:'EmployeeList'});
    }catch(err){
      this.error=true;
      this.errorMessage="Input Error";
     
    }
    
    },
   
    
    }
    
  
  }

</script>

<style>

</style>