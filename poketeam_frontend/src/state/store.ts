import { configureStore } from "@reduxjs/toolkit"
import poketeamReducer from './poketeam/poketeamSlice'
import authorizationReducer from './authorization/authorizationSlice'
import { persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import { persistStore } from "redux-persist"

const authPersistConfig = {
    key: 'authorization',
    storage,
}

const persistedAuthorizationReducer = persistReducer(authPersistConfig, authorizationReducer)

export const store = configureStore({
    reducer: {
        poketeam: poketeamReducer,
        authorization: persistedAuthorizationReducer,
    }
})


export const persistor = persistStore(store)
export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch> 