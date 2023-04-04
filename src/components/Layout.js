import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { sendCartData } from "../store/cart-actions";
import axios from 'axios';


const Layout = () => {
  let total = 0;
  const itemsList = useSelector(state => state.cart.itemsList);
  const rawcart = useSelector(state => state.cart);
  // console.log(rawcart);
  const showCart = useSelector(state => state.cart.showCart);
  itemsList.forEach(element => { total += element.totalPrice;});
    
  const mapToCart = () => {
      const cart = {
        cartProduct: rawcart.itemsList,
        totalQuantity: rawcart.totalQuantity
        
      }
    console.log(cart)

      return cart;
    };

    
  
  const submitOrder = async () => {
      // await sendCartData(mapToCart());
      try {
        const {data} = await axios.post(
          "http://127.0.0.1:8000/api/cart_get_post", mapToCart());
      //   const data = await res.json();
        // Send state as Request is successful
        console.log('posted successfully');
        // await sendRequest();
      } catch (err) {
        console.log(err);
      }
    };

    
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        { showCart && <CartItems />}
        
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button onClick={submitOrder} className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};


export default Layout;
