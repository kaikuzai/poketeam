import {configureStore} from "@reduxjs/toolkit" 
import poketeamReducer from './poketeam/poketeamSlice'
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        poketeam: poketeamReducer,
        counter: counterReducer, 
    }
})

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch> 