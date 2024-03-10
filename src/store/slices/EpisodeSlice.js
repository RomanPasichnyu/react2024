import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services/episodesService";

const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null
};

const getAll = createAsyncThunk(
    'episodesSlice/getAll',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await episodesService.getAll(page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)


const episodesSlice = createSlice({
    name: createSlice,
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {info: {prev, next}, results} = action.payload;
                state.prevPage = prev
                state.nextPage = next
                state.episodes = results
            })
})

const {reducer: episodesReducer, actions} = episodesSlice;

const episodesActions = {
    ...actions,
    getAll
}

export {
    episodesActions,
    episodesReducer
}