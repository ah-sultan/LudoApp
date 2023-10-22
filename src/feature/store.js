import { configureStore } from '@reduxjs/toolkit';
import cellSlice from "./cellSlice";

export const store = configureStore({
    reducer : {
        cells : cellSlice.reducer,
    }
})