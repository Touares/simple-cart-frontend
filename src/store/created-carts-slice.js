import {createSlice} from '@reduxjs/toolkit'
import { fetchData } from './carts-actions';

const createdCartsSlice = createSlice({
    name: 'carts',
    initialState: {
        cartsList:[],
        loading: false,
        error: null,

    },
    reducers: {
        // replaceData(state, action) {
        //     state.cartsList = action.payload;
        //     // console.log(state.cartsList);
        //     // state.itemsList = action.payload.itemsList;
        //   },
        
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.cartsList = action.payload;
          })
          .addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
        
    },
)

export const createdCartsActions = createdCartsSlice.actions;
export default createdCartsSlice;