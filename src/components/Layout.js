import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData } from "../store/cart-actions";
import axios from 'axios';
import CreatedCartsItems from "./cartsCreated";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFoundPage from "./notFoundPage";
import Cart from "./Cart";
import Pricing from "./pricing";
import { useEffect } from "react";
import Detailproduct from "./detail-product";
import CheckOutForm from "./checkoutForm";



const Layout = () => {
  let total = 0;
  const itemsList = useSelector(state => state.cart.itemsList);
  const dispatch = useDispatch();
  // console.log(rawcart);
  const showCart = useSelector(state => state.cart.showCart);
  const showCarts = useSelector(state => state.cart.showCarts);
  itemsList.forEach(element => { total += element.totalPrice;});
  
  // useEffect( async () => {

  //     const {data} = await axios.get('https://fakestoreapi.com/products');
  //     console.log(data);

  // }
  // , []) 
    
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Routes>
            
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<Detailproduct />} />
              <Route path="/pricing" element={<Pricing />} />
              {/* <Route path="/logout" element={<Lougout />} /> */}
              <Route path="*" element={<NotFoundPage />} replace />
              <Route path="/" element={<Products />} replace />
              <Route path="/checkout" element={<CheckOutForm />} replace />
            </Routes>
        {/* { showCarts && <CreatedCartsItems />}
        <Products />
        { showCart && <CartItems />}
        
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button onClick={submitOrder} className="orderBtn">Place Order</button>
        </div>{" "} */}
      </div>
    </React.Fragment>
  );
};


export default Layout;
