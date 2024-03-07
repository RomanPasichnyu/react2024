import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer, episodesReducer} from "./slices";

const store = configureStore({
    reducer:{
        characters: charactersReducer,
        episodes: episodesReducer
    }
});

export {
    store
}