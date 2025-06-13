import React, { useState, createContext, useEffect } from "react";
import all_product from "../Components/Assets/all_product.js"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let product of all_product) {
    cart[product.id] = 0;
  }
  return cart;
};


const ShopContextProvider = (props)=>{

  const [cartItems,setCartItems] = useState(getDefaultCart());

 


  const addToCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
  }

   const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

   const contextValue = {all_product,cartItems,addToCart,removeFromCart};

 
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;