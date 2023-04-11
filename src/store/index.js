import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import createdCartsSlice from "./created-carts-slice";
import productsSlice from "./products-slice";
import productSlice from "./product-slice";


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        auth: authSlice.reducer,
        carts: createdCartsSlice.reducer,
        products: productsSlice.reducer,
        product: productSlice.reducer
    }
})

export default store;