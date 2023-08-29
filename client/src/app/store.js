import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from './api/userApi'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(userApi.middleware),
})

setupListeners(store.dispatch)