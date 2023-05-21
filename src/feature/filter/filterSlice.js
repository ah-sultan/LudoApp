import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name : 'flitering',
    initialState : {
        cetagory: null,
        price:null,
        color:null,
        size: null,
    },

    reducers: {
        setCetagory : (state, action) => {
            state.cetagory = action.payload
        },
        setPrice : (state, action) => {
            state.price = action.payload
        },
        setColor : (state, action) => {
            state.color = action.payload
        },
        setSize : (state, action) => {
            state.size = action.payload
        },
        clearFilter : (state) => {
            state.cetagory = null,
            state.price = null,
            state.color = null,
            state.size = null
        }
    }
})

export const {setCetagory, setPrice, setColor, setSize} = filterSlice.actions

export default filterSlice.reducer