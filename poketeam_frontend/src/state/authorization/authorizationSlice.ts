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
        setAuthorizationLogin: (state, action: PayloadAction<string>) => {
            state.authorization.isAuthenticated = true
            state.authorization.username = action.payload
        },
        setAuthorizationLogout: (state) => {
            state.authorization = {
                isAuthenticated: false,
                username: null
            }
        },
    }
});


export const { setAuthorizationLogin, setAuthorizationLogout } = authorizationSlice.actions;
export default authorizationSlice.reducer;