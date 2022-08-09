import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface LoginType {
  username: string;
  password: string;
}

export const userLoginSlice = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_LOGIN_API,
  }),
  endpoints(build) {
    return {
      loginUser: build.mutation<LoginType, LoginType>({
        query(data: LoginType) {
          return {
            url: "/auth/login",
            method: "POST",
            body: data
          }
        }
      })
    }
  },
})

export const { useLoginUserMutation } = userLoginSlice;