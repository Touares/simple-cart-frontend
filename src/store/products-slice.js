import {createSlice} from '@reduxjs/toolkit'


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        categories: [],
        filter: 'all',
        categorySearch: '',
        productSearch: ''
    },
    reducers: {
        setProducts(state, action){
            state.products = action.payload;
        },
        setCategories(state,action) {
            state.categories = action.payload;
        },
        setFilter(state, action) {
            state.search = '';
            state.filter = action.payload;
        },
        setCategorySearch(state, action) {
            state.categorySearch = action.payload;
            // state.filter= 'all';
        },
        setProductSearch(state, action) {
            state.productSearch = action.payload;
            state.filter= 'all';
        }
        
    },
})

export const productsActions = productsSlice.actions;
export default productsSlice;