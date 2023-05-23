import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },

    reducers: {
        addToCart: (state, action) => {
            const { id, title, thumbnail, price } = action.payload
            const existingItem = state.items.find((items) => items.id === id)

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ id, title, thumbnail, price, quantity: 1 })
            }
        },

        decraseItemQuantity: (state, action) => {
            const existingItem = state.items.find((item) => item.id === action.payload)

            if (existingItem) {
                existingItem.quantity > 0 ? existingItem.quantity -= 1 : existingItem.quantity = 0
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload
            state.items = state.items.filter(item => item.id !== 0)
        }
    }
})

export const { addToCart, decraseCartItem, removeFromCart } = cartSlice.actions

export default cartSlice.reducer