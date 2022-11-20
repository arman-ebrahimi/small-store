import {createSlice} from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action){
            const existIndex = state.findIndex(item => item.shortName === action.payload.shortName);
            if(existIndex !== -1){
                state[existIndex].count += 1;
            }
            else{
                action.payload.count = 1;
                state.push(action.payload);
            }
        },
        clearCart(state, action){
            return state=[];
        }
    }
})

export default CartSlice.reducer;