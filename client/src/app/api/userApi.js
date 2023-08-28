import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: "testing",
    baseQuery: fetchBaseQuery({ baseUrl: '' }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => 'api/user'
        })
    })
})

export const { useGetUserQuery } = userApi