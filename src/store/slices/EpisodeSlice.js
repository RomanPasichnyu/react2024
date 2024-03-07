import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null
};
const episodesSlice = createSlice({
    name: createSlice,
    initialState,
    reducers: {
        setEpisodes: (state, action) => {
            const {info: {prev, next}, results} = action.payload;
            state.episodes = results
            state.prevPage = prev
            state.nextPage = next
        }
    }
})

const {reducer:episodesReducer, actions} = episodesSlice;

const episodesActions={
    ...actions
}

export {
    episodesActions,
    episodesReducer
}