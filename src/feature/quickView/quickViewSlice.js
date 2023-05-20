import { createSlice } from "@reduxjs/toolkit";

const quickViewSlice = createSlice({
    name: 'quickView',
    initialState: {
        show: false,
        data: null
    },
    reducers: {
        showQuickView: (state, action) => {
            return {
                ...state, show: true, data: action.payload
            }
        },

        hideQuickView: (state) => {
            return {
                ...state, show: false, data: null
            }
        }
    }
})


export const { showQuickView, hideQuickView } = quickViewSlice.actions

export default quickViewSlice.reducer