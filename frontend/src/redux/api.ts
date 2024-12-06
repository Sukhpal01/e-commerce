import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
     reducerPath: "myApi",
     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
     tagTypes: ['Posts'],
     endpoints: (builder) => ({
          // getPosts: builder.query({query: () => "posts"})
          loginUser: builder.mutation({
               query: (post) => ({
                    url: "posts",
                    method: "POST",
                    body: post
               })
          }) 
     }) 
})

export const { useLoginUserMutation } = myApi