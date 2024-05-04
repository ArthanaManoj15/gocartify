import { createSlice } from "@reduxjs/toolkit";




const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],//store as array of object
    reducers: {
        //actions
        //1.add items to wishlist
        // function
        addWishlistItem: (state, actions) => {
            state.push(actions.payload)
        },

        //2.remove items from wishlist
        removewishlistItem: (state, actions) => {
            return state.filter((item) => item.id != actions.payload)
        }
    }
})

export const { addWishlistItem, removewishlistItem } = wishlistSlice.actions
export default wishlistSlice.reducer
