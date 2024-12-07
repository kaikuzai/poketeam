import {configureStore} from "@reduxjs/toolkit" 
import poketeamReducer from './poketeam/poketeamSlice'

export const store = configureStore({
    reducer: {
        poketeam: poketeamReducer,
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch> 