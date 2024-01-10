import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface poketeamState {
    selectedPokemon: number[]
}

const initialState: poketeamState = {
    selectedPokemon: [],
}

const poketeamSlice = createSlice({
    name: "poketeam" ,
    initialState, 
    reducers: {
        addPokemon: (state, action: PayloadAction<number> ) => {
            if (!state.selectedPokemon.includes(action.payload)) {
                if (state.selectedPokemon.length < 6) {
                  state.selectedPokemon = [...state.selectedPokemon, action.payload];
                }
              }
        },
        removePokemon: (state, action: PayloadAction<number> ) => {
            state.selectedPokemon = state.selectedPokemon.filter((pokemon) => pokemon !== action.payload)

        },
        clearPokemon: (state) => {
            state.selectedPokemon = []
        }
    }

})

export const {addPokemon, removePokemon, clearPokemon} = poketeamSlice.actions
export default poketeamSlice.reducer