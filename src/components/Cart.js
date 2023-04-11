import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
import axios from 'axios';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AddRemoveButtons from './addRemoveButtons';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';





const Cart = () => {
  let total = 0;
  let delivery = 5;
  const rawcart = useSelector(state => state.cart);
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch()
  cartItems.forEach(element => { total += element.totalPrice;});
  const navigate = useNavigate()

  // console.log(cartItems);

  const showCart = () => {
    dispatch(cartActions.setShowCart());
  }
  const removeHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };
  const addHandler = (it) => {
    dispatch(
      cartActions.addToCart({
        item_id: it.id,
        name: it.name,
        price: it.price
      })
    );
  };

  const mapToCart = () => {
    const cart = {
      cartProduct: rawcart.itemsList,
      totalQuantity: rawcart.totalQuantity
      
    }
    return cart
  }
  const submitOrder = async () => {
    // await sendCartData(mapToCart());
    try {
      // const {data} = await axios.post(
      //   "http://127.0.0.1:8000/api/cart_get_post", mapToCart());
    //   const data = await res.json();
      // Send state as Request is successful
      // window.location.replace('/');
      // dispatch(cartActions.replaceData({itemsList:[], totalQuantity: 0}))
      navigate('/checkout');
      // toast.success('Order placed successfully, we will be in touch...');
      
      // console.log('posted successfully');
      // await sendRequest();
    } catch (err) {
      console.log(err);
      console.log(mapToCart())
    }
  };

  return (
    <div className="custom-container">

    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map(item => {
      const it = {
        id:item.item_id,
        price:item.price,
        name:item.name,
      }
      return (
        <tr key={it.id} className="table-secondary">
      <th scope="row">
        <div className="product-cell">
        <Link style={{textDecoration:'none'}} sty to={`/product/${it.id}`}>
          <div>
        <img className="item_img" src={item.image}/>
          </div>
          <div>
        {item.name}
          </div>
        </Link>


        </div>
        </th>
      <td>${item.price}</td>
      <td>

        <AddRemoveButtons  product={it}/>

      {/* <div className="btn-group" role="group">
  <button type="button" onClick={() =>removeHandler(item.item_id)}
   className="btn btn-outline-primary btn-sm "
   style={{fontSize: '14px', fontWeight: '400', fontFamily: 'Open Sans'}}>
    -
  </button>
  <button type="button" className="btn btn-secondary btn-sm my-button" style={{ cursor: 'normal', fontSize: '14px', fontWeight: '400', fontFamily: 'Open Sans', color:'#212529'}}>
  {item.quantity}
  </button>
  <button type="button" 
  onClick={() => addHandler(it)}
  className="btn btn-outline-primary btn-sm " 
  style={{fontSize: '14px', fontWeight: '400', fontFamily: 'Open Sans' }}>
    +
  </button>
</div> */}

        
        </td>
      <td>${item.totalPrice.toFixed(2)}</td>
      
      </tr>
      )
    })}
    
  </tbody>
</table>
    <div className="checkout">
      <div className="list-button">

    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Subtotal
        <span className="badge bg-primary rounded-pill">${total.toFixed(2)}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Delivery Tax
        <span className="badge bg-primary rounded-pill">${ delivery}</span>
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        Grand Total
        <span className="badge bg-primary rounded-pill">${(total - delivery).toFixed(2)}</span>
      </li>
    </ul>

    <div className="d-flex justify-content-end">
    <button onClick={submitOrder} className="btn btn-outline-primary">Place Order</button>
  </div>
      </div>
    </div>
    {/* <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div> */}
    </div>
  );
};

export default Cart;
