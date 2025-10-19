import { createAsyncThunk } from "@reduxjs/toolkit";


export const getBook=createAsyncThunk(
    "Book",
    async ()=>{
        const response=await fetch("https://jsonplaceholder.typicode.com/posts")
        const data=await response.json()
        console.log(data)
        return data
    }
)

