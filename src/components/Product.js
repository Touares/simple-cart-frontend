import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Product.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AddRemoveButtons from "./addRemoveButtons";



const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  let shortTitle = true;
  const cartItems = useSelector(state => state.cart.itemsList)
  
  const formattedTitle = () => {
    // const str = 'This is a sample string';
  const words = name.split(' '); // Split the string into an array of words
  const firstFourWords = words.slice(0, 4); // Pick the first four words
  const newTitle = firstFourWords.join(' '); // Join the first four words with a space separator
  return newTitle + '...';
  }
  const chooseTitle = () =>{
    shortTitle = !shortTitle;
  }

  const showButton = () => {
    const productInCart = cartItems.find(p => p.item_id === id);

    if (productInCart) {
      return <AddRemoveButtons product={
       { id,
        name,
        price}
      }/>
    } else {
      return (
        <a style={{cursor: 'pointer'}} onClick={() => addOrDeleteFromCart(id)} >
      <button style={{borderRadius:'50px', fontSize:'13px'}} type="button" class="btn btn-outline-primary btn-sm">
      Add to cart 
      {/* <img style={{width:'26px', height:'26px'}} className="product-cart-icon" src="https://img.icons8.com/pastel-glyph/64/000000/paper-bag--v2.png"/> */}
       </button>
       </a>);
    }
  }

  const addOrDeleteFromCart = (id = null) => {
    const productInCart = cartItems.find(p => p.item_id === id);
    if (productInCart) {
      dispatch(cartActions.deleteFromCart(id));
    } else {
      dispatch(cartActions.addToCart({
        name,
        item_id: id,
        price,
        image:imgURL
      }));

    }
  }

  

  const cartIcon = (id) => {
    const productInCart = cartItems.find(p => p.item_id === id);
    if (productInCart) {
      return <i style={{ fontSize:'27px', color: 'red' }} class="bi bi-cart"></i>
    }
    return <i style={{ fontSize:'27px' }} class="bi bi-cart"></i>

  }

  return (

    <div className="card bg-light mb-3">
      <Link to={`/product/${id}`}>
    <img src={imgURL} alt={name} className="card-img-top" />

      </Link>
    <div className="card-body">
      <h5 className="card-title" onClick={chooseTitle}>{shortTitle ?  formattedTitle() : name}</h5>
      <h6 className="card-subtitle mb-3 " style = {{fontSize: '15px'}}>${price}</h6>
      <div className="product-add">


        {showButton()}
        
        {/* <button style={{borderRadius:'50px', fontSize:'13px'}} type="button" class="btn btn-outline-primary btn-sm">
          Add to cart <img style={{width:'26px', height:'26px'}} className="product-cart-icon" src="https://img.icons8.com/pastel-glyph/64/000000/paper-bag--v2.png"/>
           </button> */}
        

      </div>
    </div>
  </div>

);
};

{/* // <div className="card">
//   <img src={imgURL} alt={name} />
//   <h2>{name}</h2>
//   <p>$ {price}</p>
//   <button onClick={addToCart}>Add to cart</button>

// </div> */}
export default Product;
