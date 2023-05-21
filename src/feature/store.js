import { configureStore } from '@reduxjs/toolkit';
import quickViewSlice from './quickView/quickViewSlice';
import productSlice from './product/productSlice';
import filterSlice from './filter/filterSlice';

export const store = configureStore({
    reducer: {
        quickView: quickViewSlice,
        products: productSlice,
        filter : filterSlice,
    }
})

