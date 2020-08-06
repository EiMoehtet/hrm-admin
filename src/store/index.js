import Vuex from 'vuex'
import Vue from 'vue'
import employees from './modules/employees'
import auth from './modules/auth'


Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        employees,
        auth
    }
})