import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchCetagory = createAsyncThunk('cetagory/fetchCetagory', async () => {
    const res = await fetch(`https://api.npoint.io/44d9930f29cc64084a3a`)
    const cetagoryData = res.json()

    return cetagoryData
})

const cetagorySlice = createSlice({
    name: "cetagory",
    initialState: {
        status: 'isLoading',
        data: [],
        error: null
    },

    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCetagory.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCetagory.fulfilled, (state, action) => {
                state.status = 'success',
                    state.data = action.payload
            })

            .addCase(fetchCetagory.rejected, (state, action) => {
                state.status = 'failed',
                    state.data = [],
                    state.error = action.error
            })
    }
})

export default cetagorySlice.reducer