import axios from 'axios'
import store from '@/store'
const state={
    employees:[],
    employee:null
}
const mutations={
    setEmployees(state,employees){
        state.employees=employees;
    },
    setEmployee(state,employee){
        state.employee=employee;
    },
    setEmployeeDetail(state,employeeDetail){
        state.employee.employee_detail=employeeDetail;
    },
    storeEmployee(state,employee){
        if(state.employee){
            state.employees.push(employee);
        }
       
    },
    
    removeEmployee(state,id){
        var index=state.employees.findIndex(e=>e.id==id);
        state.employees.splice(index,1);
    }
}
const actions={
    async resetEmployee({commit},data){
        commit('setEmployee',data);
    },
    async getEmployees({commit}){
        const res=await axios.get("http://localhost:8000/api/employees",{headers:{"Authorization":"Bearer "+store.getters.accessToken}});
            commit('setEmployees',res.data);
        
        
    },

    async getEmployee({commit},id){
        const res=await axios.get("http://localhost:8000/api/employees/"+id,{headers:{"Authorization":"Bearer "+store.getters.accessToken}});
        commit('setEmployee',res.data);
      
    },
    async createEmployee({commit},formData){
        const res=await axios.post("http://localhost:8000/api/employees",formData);
            commit('storeEmployee',res.formData);    
    },
    async updateBasicInfo({commit},formData){
       const res=await axios.put("http://localhost:8000/api/employees/"+formData.id,formData,{headers:{"Authorization":"Bearer "+store.getters.accessToken}});  
       commit("setEmployee",res.data);
      
    },
    async updateEmployeeDetail({commit},formData){
        const res=await axios.put("http://localhost:8000/api/employeeDetails/"+formData.id,formData,{headers:{"Authorization":"Bearer "+store.getters.accessToken}});  
        commit("setEmployeeDetail",res.data);
       
     },
    async deleteEmployee({commit},id){
        await axios.delete("http://localhost:8000/api/employees/"+id);
        commit('removeEmployee',id);
    }

}
const getters={
    employees(state){
        return state.employees;
    },
    employee(state){
        return state.employee;
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}