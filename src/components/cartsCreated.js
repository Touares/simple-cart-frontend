import React, { useRef } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from 'axios';
import { createdCartsActions } from "../store/created-carts-slice";
import { fetchData } from "../store/carts-actions";

const CreatedCartsItems = () => {
  // const effectRan = useRef(false);
  const cartItems = useSelector(state => state.cart.itemsList);
  const dispatch = useDispatch();
  const carts = useSelector(state => state.carts.cartsList);
  const loading = useSelector((state) => state.carts.loading);
  const error = useSelector((state) => state.carts.error);
  console.log(carts);
  
  useEffect( () => {
    dispatch(fetchData());
    // if (effectRan.current === true) {

    // }
    // return () => {
    //   effectRan.current = true;
    // }

  }
  , []) 

  // useEffect(() => {
  //   async function fetchCartList() {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:8000/api/cart_get_post");
  //       dispatch(createdCartsActions.replaceData(response.data));
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //    fetchCartList();
  // }, []);
    // async () => {
        
    //     try {
    //       const {data:cartsList} = await axios.get('http://127.0.0.1:8000/api/cart_get_post');
    //       dispatch(createdCartsActions.replaceData(cartsList));
    //   } catch (err) {
    //       console.log(err);
    //   };
    // }

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
    

  return (
    <div className="cart-container">
      {
      <ul>
      {carts.map(cart => {
        return  (<li key={cart.id}>{cart.totalQuantity}</li>)
          
        })}
        </ul>
      }
      {/* <h2>Carts In the Database</h2>
      <ul>
        {cartItems.map(item => 
        <li key={item.id}>
          <CartItem id={item.id} quantity={item.quantity} total={item.totalPrice} price={item.price} name={item.name} />
        </li>
          )}
      </ul> */}
    </div>
  );
};

export default CreatedCartsItems;
