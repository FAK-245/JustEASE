import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {formSubmit} from '../service/form.service';

const initialState = {
    responses: {},
    img: {}
};

//Form handling

export const formSubmitAsync = createAsyncThunk(
    'form/submit',
    async (data) => {
        return await formSubmit(data);
    }
);

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        modifyResponses(state, action) {
            state.responses = {...state.responses, ...action.payload};
        },
        modifyImg(state, action) {
            state.img = {...state.img, ...action.payload};
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
export const selectImg = (state) => state.form.img;

export const { modifyResponses, modifyImg } = formSlice.actions

export default formSlice.reducer;
