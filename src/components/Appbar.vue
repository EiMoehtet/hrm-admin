<template>
  <div>
  <Sidebar :drawer="drawer"/>
    <v-app-bar app clipped-left  color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>HR Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon  @click="logout">
        <v-icon >mdi-power</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
 import Sidebar from '@/components/Sidebar.vue'
 import store from '@/store'
 import router from '@/router'
export default {
 components:{
   Sidebar
 },
 data(){
   return{
     drawer:true
   }
 },
 methods:{
   async logout(){
     try{
    await store.dispatch('logout');
    router.push('/login');
     }catch(err){
       console.log(err);
     }
    
    
   }
 }
}
</script>

<style>

</style>