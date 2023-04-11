import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
const Carts = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch()

  const showCarts = () => {
    dispatch(cartActions.setShowCarts());
  }
  return (
    <div className="cartIcon">
      <h3 onClick={showCarts}>Carts Created</h3>
    </div>
  );
};

export default Carts;
