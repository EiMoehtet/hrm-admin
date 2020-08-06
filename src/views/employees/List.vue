<template>
  <div>
    <v-container>
    <v-card>
      <v-card-title>
        Employee List
      </v-card-title>
      <v-card-text>
        <v-simple-table fixed-header height="300px" v-if="employees">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">Name</th>
           <th class="text-left">Email</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
         <tr v-for="employee in employees" :key="employee.id">
           <td>{{employee.id}}</td>
           <td>{{employee.name}}</td>
           <td>{{employee.email}}</td>
           <td><v-btn icon color="primary" :to="{name:'Employee',params:{id:employee.id}}">
             <v-icon >mdi-eye</v-icon>
           </v-btn>
           
           </td>
          </tr>
      </tbody>
    </template>
  </v-simple-table>
      </v-card-text>
    </v-card>
  </v-container>
  </div>
</template>

<script>

import store from '@/store'
import {myMixin} from '@/mixins/exampleMixin.js'
export default {
  mixins:[myMixin],
  beforeCreate(){
    console.log("Before create works.");
  },
  created(){
    console.log("Created works");
    this.getData();
  },
  beforeDestroy(){
    console.log("BeforeDestroy works");
  },
  destroyed(){
    console.log("Destroyed works");
  },
  computed:{
   employees(){
     return store.getters.employees;
   }
  },
  methods:{
    getData(){
     store.dispatch('getEmployees');
    },
    deleteEmployee(employee){
      store.dispatch('deleteEmployee',employee.id);
    }

  }
}
</script>

<style>

</style>