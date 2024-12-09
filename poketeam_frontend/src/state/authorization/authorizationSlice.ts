import { createSlice } from "@reduxjs/toolkit";

interface authorizationState {
    authorization: object
}

const initialState: authorizationState = {
    authorization: {},
}

const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {

    }
})


export const { } = authorizationSlice.actions
export default authorizationSlice.reducer