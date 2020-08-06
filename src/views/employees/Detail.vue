<template>
  <v-container>
<div v-if="employee">
  <v-card>
    <v-card-title>
      <span>Basic Info</span>
      <EditBasicInfo :id="employee.id" :name="employee.name" :email="employee.email" />
    </v-card-title>
    <v-card-text>
      <p>ID:{{employee.id}}</p>
            <p>Name:{{employee.name}}</p>
            <p>Email{{employee.email}}</p>
    </v-card-text>
    <v-card-title>
      <span>Employee Detail</span>
      <EditEmployeeDetail :id="employee.employee_detail.id" :mobile="employee.employee_detail.mobile" :gender="employee.employee_detail.gender" :dob="employee.employee_detail.dob" :address="employee.employee_detail.address"/>
    </v-card-title>
    <v-card-text>
            <p>Mobile:{{employee.employee_detail.mobile}}</p>
            <p>Gender:{{employee.employee_detail.gender}}</p>
            <p>Dob{{employee.employee_detail.dob}}</p>
            <p>Address:{{employee.employee_detail.address}}</p>
    </v-card-text>
  </v-card>     
        </div>
    
  </v-container>
    
</template>
<script>
import store from '@/store'
import EditBasicInfo from '@/components/employees/EditBasicInfo.vue'
import EditEmployeeDetail from '@/components/employees/EditEmployeeDetail.vue' 
export default {
    components:{
        EditBasicInfo,
        EditEmployeeDetail
    },
    
   created(){
    this.fetchData();
  },
   computed:{
     employee(){
     return store.getters.employee;
   }
  },
  beforeRouteLeave(to,from,next){
      console.log("Befor route worked.",store);
      store.dispatch('resetEmployee',null);
      return next();

  },
  methods:{
      fetchData(){
      store.dispatch('getEmployee',this.$route.params.id)
    },
  }
}
</script>
