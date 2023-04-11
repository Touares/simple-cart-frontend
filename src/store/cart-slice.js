import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList:[],
        totalQuantity:0,
        showCart: false,
        showCarts: false

    },
    reducers: {
        replaceData(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.itemsList = action.payload.itemsList;
          },
        addToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.itemsList.find(item => item.item_id === newItem.item_id);
            if (existingItem) {
                existingItem.quantity ++;
                existingItem.totalPrice += newItem.price;

            } else {
                state.itemsList.push({
                    item_id: newItem.item_id,
                    price:newItem.price,
                    quantity: 1,
                    totalPrice:newItem.price,
                    name: newItem.name,
                    image: newItem.image
                    
                })
                state.totalQuantity++;
            }
        },
        removeFromCart(state,action) {
            const id = action.payload
            const existingItem = state.itemsList.find(item => item.item_id === id);
            if (existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.item_id !== id);
                state.totalQuantity --;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -=  existingItem.price; 
            }
        },
        deleteFromCart(state, action) {
            const id = action.payload;
            state.itemsList = state.itemsList.filter(item => item.item_id !== id);
            state.totalQuantity --;
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
            // state.showCarts = !state.showCarts
            if (state.showCart) {
                state.showCarts = false;
            }
        },
        setShowCarts(state) {
            state.showCarts = !state.showCarts;
            // state.showCarts = !state.showCarts
            if (state.showCarts) {
                state.showCart = false;
            }
        }
    },
})

export const cartActions = cartSlice.actions;
export default cartSlice;