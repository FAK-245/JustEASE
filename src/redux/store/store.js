import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../slice/formSlice';
import SettingReducer from '../slice/settingSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    setting: SettingReducer
  },
});
