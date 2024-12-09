import { createSlice } from "@reduxjs/toolkit"

interface pokesearchState {
    searchedPokemon: string
};

const initialState: pokesearchState = {
    searchedPokemon: ""
};

const pokesearchSlice = createSlice({
    name: "pokesearch",
    initialState,
    reducers: {

    }
});

export default pokesearchSlice;