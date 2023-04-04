import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import CartItems from "./components/CartItems";
import { ReactFragment } from "react";

function App() {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(cartItems);
  return (
    <div className="App">
      {/* {!isLoggedIn ?<Auth /> : <ReactFragment > <Layout /> <cartItems /> <ReactFragment /> } */}
      {!isLoggedIn ?<Auth /> : <Layout /> 
       }
    </div>
  );
}

export default App;
