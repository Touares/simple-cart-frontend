import {createSlice} from '@reduxjs/toolkit'


const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: {},
    },
    reducers: {
        setProduct(state, action){
            state.product = action.payload
            
        },
        // setCategories(state,action) {
        //     state.categories = action.payload
        // }
        
    },
})

export const productActions = productSlice.actions;
export default productSlice;