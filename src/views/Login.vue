<template>
  <div>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Ei Moe Htet</v-toolbar-title>
               
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="Login"
                    v-model="email"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="onSubmit">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  </div>
</template>

<script>
import store from '@/store'
import router from '@/router'
export default {
  data(){
    return{
      email:null,
      password:null,
    }
  },
  
 
  methods:{
     async onSubmit(){
      
      var data={
        email:this.email,
        password:this.password
      }  
      
         try{
        await store.dispatch('login',data);
        router.push('/');
      }catch(err){
       alert("Error");
      }  
    }
   
  }
}
</script>

<style>

</style>