import { createSlice } from "@reduxjs/toolkit";

export const cartslice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalPrice:0
    },
    reducers:{
        addcart:(state,action)=>{
            const newitem=action.payload;
           state.items.push(newitem); 
           state.totalPrice+=newitem.price;
        },

        



        removecart: (state, action) => {
            const itemid = action.payload; // ID of the item to remove
            const itemIndex = state.items.findIndex((item) => item.id === itemid);
        
            if (itemIndex !== -1) { // Check if item exists
                state.totalPrice -= state.items[itemIndex].price; // Subtract its price
                state.items.splice(itemIndex, 1); // Remove item from array
            }
        },
    },
})


export const {addcart,removecart}=cartslice.actions;

export default cartslice.reducer;