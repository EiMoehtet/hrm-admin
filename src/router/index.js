import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import EmployeeList from '@/views/employees/List.vue'
import DefaultContainer from '@/containers/DefaultContainer.vue'
import Dashboard from '@/views/Dashboard.vue'
import store from '@/store'
Vue.use(VueRouter)

const routes=[
    {path:'/',component:DefaultContainer,
        redirect:"/dashboard",
        beforeEnter(to,from,next){
            if(store.getters.accessToken){
                return next();
            }else{
                return next("/login");
            }
        },
        children:[
                {path:'/dashboard',component:Dashboard},
                {path:'/employees',name:'EmployeeList',component:EmployeeList},
                {path:'/employees/create',name:'CreateEmployee',component:()=>import('@/views/employees/Create.vue')},
                {path:'/employees/:id',name:'Employee',component:()=>import('@/views/employees/Detail.vue')},
           
       
            
        ]
    },
    
    {path:'/login',component:Login},
    {path:'/register',component:Register}
]
const router=new VueRouter({
    routes
})
    
export default router;