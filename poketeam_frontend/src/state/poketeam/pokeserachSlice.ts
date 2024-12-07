import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface pokesearchState {
    searchedPokemon: string
}

const initialState: pokesearchState = {
    searchedPokemon: ""
}

const pokesearchSlice = createSlice({
    name: "pokesearch", 
    initialState, 
    reducers: {
        
    }
})