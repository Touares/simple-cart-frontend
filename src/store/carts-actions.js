// import { cartActions } from "./cart-slice";
import axios from 'axios';
import { createdCartsActions } from "./created-carts-slice";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/cart_get_post');
    return response.data;
  }
);
