import React from "react";
import Carts from "./carts";
import Cart from "./Cart";
import "./Header.css";
import {Link, NavLink} from 'react-router-dom'
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../store/header.slice";



const Header = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const show =useSelector((state) => state.header.show);


  const showHeader = () => {
    dispatch(headerActions.setShow())

  }

  return (
    <header>

<nav className="navbar navbar-expand-lg navbar-light bg-transparent">
  
  <div className="container-fluid">
    <NavLink style={{marginRight: '50px', marginLeft: '10px'}} className="nav-link" to="/">ITShop</NavLink>

    <div className="cart-icon-responsive">
    <NavLink className="nav-link " to="cart" style={{ marginTop: '7px'}}>
            <img className="cart-icon" src="https://img.icons8.com/pastel-glyph/64/000000/paper-bag--v2.png"/>
            <span class="badge">{quantity}</span>
            </NavLink>

    </div>

    <button   className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <NavLink className="nav-link" to="/">Home<span className="visually-hidden">(current)</span></NavLink>
        
          {/* <a className="nav-link active" href="/">Home
            <span className="visually-hidden">(current)</span>
          </a> */}
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="#">Features</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        
        
      </ul>

    <ul className="d-flex">
    <li className="nav-item">
    {/* <div className="d-flex d-lg-none">
      <NavLink className="nav-link cart-icon" to="cart" style={{ marginTop: '7px'}}>
        <img className="cart-icon" src="https://img.icons8.com/pastel-glyph/64/000000/paper-bag--v2.png"/>
        <span class="badge">{quantity}</span>
      </NavLink>
    </div> */}


          <NavLink className="nav-link cart-icon" to="cart" style={{ marginTop: '7px'}}>
            <img className="cart-icon cart-icon-non-responsive" src="https://img.icons8.com/pastel-glyph/64/000000/paper-bag--v2.png"/>
            <span class="badge cart-icon-non-responsive">{quantity}</span>
            </NavLink>
          {/* <a className="nav-link" href="/cart"><img src="./cart.png" alt="cart" /></a> */}
        </li>
    </ul>

      {/* <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search">
        <button className="btn btn-secondary my-2 my-sm-0" type="submit"><Cart /></button>
      </form> */}
    </div>
  </div>
</nav>

      {/* <nav classNameName="header-nav">
        <ul classNameName="header-ul">
          <li>
            <h2
              classNameName="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Carts />
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
