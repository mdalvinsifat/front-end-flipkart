import { createSlice } from "@reduxjs/toolkit";


export const CategorySlice = createSlice({
    name:"categoryies", 
    initialState:{
       category :[] , 
       offers : []
    }, 

    reducers:{

        setCategory:(state, action) => {
            state.category= action.payload
        }, 
        setOffers : (state , action ) =>{
            state.offers = action.payload
        }
    }
})



export const {setCategory, setOffers} = CategorySlice.actions ; 
export default CategorySlice.reducer