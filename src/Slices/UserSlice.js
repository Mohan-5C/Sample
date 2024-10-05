import { createSlice } from "@reduxjs/toolkit";
const initialState=[];
const UserSlice=createSlice(
    {
        name:'user',
        initialState,
        reducers:{
            addUser(state,action){
                state.push(action.payload);
            },
            deleteUser(state,action){
                return state.filter((val,index)=>index!==action.payload);
            },
        }
    }
)

export const {addUser,deleteUser}=UserSlice.actions;
export default UserSlice.reducer;