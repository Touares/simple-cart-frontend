import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import CartItems from "./components/CartItems";
import { ReactFragment } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(cartItems);
  return (
    <div className="App">
      <ToastContainer/>
      {/* {!isLoggedIn ?<Auth /> : <ReactFragment > <Layout /> <cartItems /> <ReactFragment /> } */}
      {/* {!isLoggedIn ?<Auth /> : <Layout /> 
       } */}
       <Layout />
    </div>
  );
}

export default App;
