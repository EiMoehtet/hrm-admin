<template>
  <v-app>
      <Appbar/>
      <v-main>
          <router-view></router-view>
     </v-main>
  </v-app>
</template>

<script>
import Appbar from '@/components/Appbar.vue'
export default {
    components:{
        Appbar
    },
    data(){
        return{
            drawer:true
        }
    },
   
}
</script>

<style>

</style>