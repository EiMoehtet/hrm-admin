import axios from 'axios'
const state={
    accessToken:null
}
const mutations={
    storeAccessToken(state,token){
        state.accessToken=token;
    },
    removeToken(state){
        state.accessToken=null;
    }
}
const actions={
    async login({commit},data){
        var formData=new FormData();
        formData.append('grant_type','password');
        formData.append('client_id',1);
        formData.append('client_secret','3LSDMcRNpqZNo7G3VRpIy4YR8EVm1pYtgzhjHVJz');
        formData.append('username',data.email);
        formData.append('password',data.password);
        formData.append('scope','');
        const res=await axios.post("/oauth/token",formData,{headers:{'Content-Type':'multipart/form-data'}});
        console.log(res.data);
        commit('storeAccessToken',res.data.access_token);

    },
    async logout({commit}){
        commit('removeToken');

    }
}
const getters={
    accessToken(state){
        return state.accessToken;
    }
}
export default{
    state,
    mutations,
    actions,
    getters
}