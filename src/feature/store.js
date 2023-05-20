import { configureStore } from '@reduxjs/toolkit';
import quickViewSlice from './quickView/quickViewSlice';
import cetagorySlice from './cetagory/cetagorySlice';

export const store = configureStore({
    reducer: {
        quickView: quickViewSlice,
        cetagory: cetagorySlice,
    }
})

