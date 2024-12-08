import { configureStore } from "@reduxjs/toolkit"
import poketeamReducer from './poketeam/poketeamSlice'
import authorizationReducer from './authorization/authorizationSlice'

export const store = configureStore({
    reducer: {
        poketeam: poketeamReducer,
        authorization: authorizationReducer,
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch> 