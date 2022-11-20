import {configureStore} from "@reduxjs/toolkit";

import CartReducer from "../components/cart/CartSlice"

export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
    }
)