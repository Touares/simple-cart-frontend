
import { useDispatch, useSelector } from "react-redux";
// import CartItems from "./CartItems";
import './checkout.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { cartActions } from "../store/cart-slice";





const CheckOutForm = () => {
    let total = 0;
    const cartItems = useSelector(state => state.cart.itemsList);
    const quantity = useSelector(state => state.cart.totalQuantity);
    // const cartItems = useSelector(state => state.cart.itemsList)
    cartItems.forEach(element => { total += element.totalPrice;});
//   const navigate = useNavigate()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
      e.preventDefault();
        dispatch(cartActions.replaceData({itemsList:[], totalQuantity: 0}));
        navigate('/');
        toast.success('Order placed successfully, we will be in touch...');
    }


    if (quantity === 0) {
      // console.log(cartItems)
      return (<div>
        <h1 className="text-center">You have not added products to your cart yet</h1>
         </div>);
    } else {
      
      
      return ( 

        <div className="total-checkout-container">
            <h1 className="text-center">Checkout</h1>
        <div className="checkout-container" >
    <form onSubmit={e => handleSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" placeholder="First and last name" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone number</label>
        <input type="tel" className="form-control" id="phone" placeholder="(123) 456-7890" required/>
      </div>

        <div className="address-and-postal">

      <div className="address-input mb-3">
      <label htmlFor="address" className="form-label">Address</label>
        <input type="text" className="form-control" id="address" placeholder="Address" required/>
      </div>
      <div className="zip-input mb-5">
      <label htmlFor="zipcode" className="form-label">Zip Code</label>
        <input type="number" className="form-control" id="zipcode" placeholder="Zip Code" required/>
      </div>
        </div>


      <div className="">
        {/* <label className="form-label">Shipping type</label> */}

        {/* <div className="shipping">

        <div class="form-check">
        <input class="form-check-input" type="radio" id="expedition" name="shipping-type" value="1" required/>
        <label class="form-check-label" for="option1">Expedition</label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" id="standard" name="shipping-type" value="2" required/>
        <label class="form-check-label" for="option2">Standard</label>
      </div> */}

{/* </div> */}


      </div>

        <div className="checkout-button">

      <button type="submit" className="btn btn-outline-primary">Checkout</button>
        </div>

    </form>

        <div className="cart-summary">
            <div className="summary">Cart summary <Link to={'/cart'}>(edit)</Link></div>
            {cartItems.map(item => {

                return (
    
    
                    <div className="itemSummary">
                        <div className="item-quantity">{item.quantity} x </div>
                        <div className="item-name">{item.name}</div>
                        <div className="item-price">${item.totalPrice.toFixed(2)}</div>
                    </div>
                ) 
            }


                
            
            )}
            <div className="checkout-total" >Total: <b>${total.toFixed(2)}</b></div>


        </div>

  </div>
        </div>
            

     );}
}
 
export default CheckOutForm;