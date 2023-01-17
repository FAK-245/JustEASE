import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {formSubmit} from '../service/form.service';

const initialState = {
    responses: {}
};

//Form handling

export const formSubmitAsync = createAsyncThunk(
    'form/submit',
    async (credentials) => {
        //return await login(credentials);
    }
);

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        modifyResponses(state, action) {
            console.log(action.payload)
            state.responses = {...state.responses, ...action.payload};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(formSubmitAsync.fulfilled, (state, action) => {
                //if (!action.payload.error) state.loggedIn = true;
            })
    },
});

export const selectResponses = (state) => state.form.responses;

export const { modifyResponses } = formSlice.actions

export default formSlice.reducer;
