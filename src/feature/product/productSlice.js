import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchProduct = createAsyncThunk('cetagory/fetchCetagory', async () => {
    const res = await fetch(`https://api.npoint.io/44d9930f29cc64084a3a`)
    const productData = await res.json()
    return productData
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        status: 'isLoading',
        data: [],
        error: null
    },

    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProduct.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.status = 'success',
                    state.data = action.payload
            })

            .addCase(fetchProduct.rejected, (state, action) => {
                state.status = 'failed',
                    state.data = [],
                    state.error = action.error
            })
    }
})

export default productSlice.reducer