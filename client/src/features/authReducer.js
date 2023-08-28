import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 77,
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        default1: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            return state
        },

    },
})

// Action creators are generated for each case reducer function
export const { default1 } = authReducer.actions

export default authReducer.reducer