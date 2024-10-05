import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './Slices/UserSlice';
const Store=configureStore(
    {
        devTools:true,
        reducer:{
            
            users:UserSlice,
        }
    }
)

export default Store;