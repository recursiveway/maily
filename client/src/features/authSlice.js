import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getting: (state) => {
            return state.value
        },
    }
})

export const { getting } = authSlice.actions

export default authSlice.reducer


