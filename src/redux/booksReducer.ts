import {createSlice} from "@reduxjs/toolkit"
import { getBook } from "./bookAciton.ts"

const initialState={
    books:[],
    loading:false,
    error:null
}

export const booksSlice=createSlice({
    name:"Book",
    initialState,
    reducers:{
        
    },
    extraReducers: builder => {
        
        builder.addCase(getBook.fulfilled,(state,action)=>{
            state.books=action.payload
        })

    }
})

export default booksSlice.reducer
