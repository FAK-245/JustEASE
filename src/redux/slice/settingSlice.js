import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: {id: "DE", desc: "German"},
};

export const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        modifyLanguage(state, action) {
            state.language = action.payload;
        },
    }
});

export const selectLanguage = (state) => state.setting.language;

export const { modifyLanguage } = settingSlice.actions

export default settingSlice.reducer;
