import {createSlice} from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action){
            const existIndex = state.findIndex(item => item.name === action.payload.name);
            if(existIndex !== -1){
                if(state[existIndex].count === state[existIndex].quantity){
                    return alert("Your order is more than the product's quantity" + state[existIndex].count);
                }
                state[existIndex].count += 1;
            }
            else{
                state.push({ ...action.payload, count: 1 })
            }
        },
        clearCart(state){
            return state=[];
        },
        removeProduct(state, action){
            state.splice(action.payload, 1)
        },
        changeCount(state, action){
            state[action.payload.index].count = action.payload.count;
        }
    }
})

export default CartSlice.reducer;