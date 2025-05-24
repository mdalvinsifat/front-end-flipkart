import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./useSlice";


const store = configureStore({
    reducer:{
        auth:UserSlice
    }
})


export default store ; 