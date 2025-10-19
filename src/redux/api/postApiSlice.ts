import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {posttype} from "../types/posts"

export const postApiSlice = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<posttype[],{limit?:number, ofset?:number}>({
            query: ({limit,ofset}) => `/posts?_limit=${limit}&_ofset=${ofset}`
        })
    })
});

export const { useGetPostsQuery } = postApiSlice;
