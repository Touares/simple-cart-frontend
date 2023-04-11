import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../store/product-slice';
import './product-detail.css';
import AddRemoveButtons from './addRemoveButtons';
import { cartActions } from '../store/cart-slice';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faStar } from '@fortawesome/free-solid-svg-icons';



const Detailproduct = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.product);
    console.log(product);
    const { id } = params;
    // console.log(product);
    const cartItems = useSelector(state => state.cart.itemsList)

    useEffect( async () => {
        try {
            // console.log(params);
            // console.log(id);
            const {data:product} = await axios.get('https://fakestoreapi.com/products/'+id);
            // console.log(product);
            dispatch(productActions.setProduct(product));
            
        } catch (error) {
            console.log(error);
        }
    }, [])

    const addHandler = (product) => {
      dispatch(
        cartActions.addToCart({
          item_id: product.id,
          name: product.title,
          price: product.price,
          image:product.image
        })
      );
    };

    const showButton = () => {
      const productInCart = cartItems.find(p => p.item_id === product.id);
  
      if (productInCart) {
        return <AddRemoveButtons product={
         { id:product.id,
          name:product.title,
          price:product.price,
        }
        }/>
      } else {
        return (
          <a style={{cursor: 'pointer'}} onClick={() => addHandler(product)} >
        <button style={{borderRadius:'50px', fontSize:'13px'}} type="button" class="btn btn-outline-primary">
        Add to cart 
        {/* <img style={{width:'26px', height:'26px'}} className="product-cart-icon" src="https://img.icons8.com/pastel-glyph/64/000000/paper-bag--v2.png"/> */}
         </button>
         </a>);
      }
    }


    return ( 
        
  <div style={{marginTop:'20px'}} className="row">
    <div className="col-3">
      <img src={product.image} alt="" />
    </div>
    <div style={{paddingTop:'20px'}} className="col-6">
        <div className='info-container'>

        <h3>{product.title}</h3>
        <p>${product.price}<br/></p>
        {product.rating ?  <pre>Rate: {product.rating.rate}   {product.rating.count} ratings<br/></pre>: null}
        {/* <p></p> */}
        <h4>
        Category: {product.category}
        </h4>
        
        <h4><br/>
            <b>Description</b>

        </h4>
           <p>
            </p> {product.description}
            
        
        </div>


    
    </div>
    <div style={{paddingTop:'80px', paddingRight:'20px'}} className="col-3">
      {showButton()}
    </div>
  </div>
     );
}
 
export default Detailproduct;