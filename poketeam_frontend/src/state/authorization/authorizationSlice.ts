import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authorizationState {
    authorization: User
}

interface User {
    isAuthenticated: boolean
    username: string | null
}

const initialState: authorizationState = {
    authorization: {
        isAuthenticated: false,
        username: null
    },
}

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.authorization.isAuthenticated = true
            state.authorization.username = action.payload
        },
        logout: (state) => {
            state.authorization = {
                isAuthenticated: false,
                username: null
            }
        },
    }
});


export const { login, logout } = authorizationSlice.actions;
export default authorizationSlice.reducer;