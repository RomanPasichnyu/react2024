import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {charactersService} from "../../services";

const initialState = {
    characters: [],
};

const getAll = createAsyncThunk(
    'characterSlice/getAll',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await charactersService.getById(ids);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)


const characterSlice = createSlice({
    name: createSlice,
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.characters=action.payload

            })


})

const {reducer: charactersReducer, actions} = characterSlice;

const charactersActions = {
    ...actions,
    getAll
}

export {
    charactersReducer,
    charactersActions
}