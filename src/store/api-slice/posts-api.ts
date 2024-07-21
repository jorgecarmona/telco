// store/api-slice/posts-slice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Post = {
  id: number;
  title: string;
  body: string;
};

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
    }),
  }),
});

export const {useGetPostsQuery} = postsApi;