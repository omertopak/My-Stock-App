import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:"auth",
    initialState:{
        currentUser: null,
        loading:false,
        error:false,
        isAdmin:false,
        token: null,
    },
    reducers:{
        fetchstart:(state)=>{
            state.loading=true;
            state.error=false;
        },
        loginSucccess:(state,action)=>{
            state.loading=false;
            state.currentUser=action?.payload?.user?.username;
            state.isAdmin= action?.payload?.is_supervisor;
            state.token=action?.payload?.key
        },
        logoutSuccess:(state)=>{
            state.loading=false;
            state.currentUser=null;
            state.token=null
        },
        registerSuccess:(state,action)=>{
            state.loading=false;
            state.currentUser=action?.payload?.username;
            state.token=action?.payload?.token;
            state.error=false;

        },
        fetchFail:(state)=>{
            state.loading=false;
            state.error=true;
        },
    }
})

export const {fetchstart, loginSucccess, registerSuccess,logoutSuccess,fetchFail}=authSlice.actions;
export default authSlice.reducer