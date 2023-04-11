import React from 'react';
import { cartActions } from '../store/cart-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const AddRemoveButtons = (props) => {
  const {product} = props;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.itemsList);
  const productInCart = cartItems.find(p => p.item_id === product.id);
  
  const addHandler = (it) => {
    dispatch(
      cartActions.addToCart({
        item_id: it.id,
        name: it.name,
        price: it.price
      })
    );
  };

  const removeHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const deletehandler = (id) => {
    dispatch(cartActions.deleteFromCart(id))
  }


  return ( 
    <div className="btn-group" role="group">
  <button type="button" onClick={() =>removeHandler(product.id)}
   className="btn btn-outline-primary btn-sm "
   style={{fontSize: '14px', fontWeight: '400', fontFamily: 'Open Sans'}}>
    -
    {/* <i className="bi bi-dash my-icon"></i> */}
  </button>


  <button type="button" className="btn btn-secondary btn-sm my-button" style={{ cursor: 'normal', fontSize: '14px', fontWeight: '400', fontFamily: 'Open Sans', color:'#212529'}}>
  {productInCart.quantity}
  </button>


  <button type="button" 
  onClick={() => addHandler(product)}
  className="btn btn-outline-primary btn-sm " 
  style={{fontSize: '14px', fontWeight: '400', fontFamily: 'Open Sans' }}>
    {/* <i className="bi bi-plus " ></i> */}
    +
  </button>
  <button type="button" 
  onClick={() => deletehandler(product.id)}
  className="btn btn-outline-danger btn-sm " 
  style={{fontSize: '14px', fontWeight: '400', fontFamily: 'Open Sans' }}>
    {/* <i className="bi bi-plus " ></i> */}
    x
  </button>
</div>
   );
}
 
export default AddRemoveButtons;




