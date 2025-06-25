"use client";

import { createContext, useContext, useState } from "react";

const ShopProvider = createContext();

export const ShopContext = ({ children }) => {

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    setCart((prev) => {
      // Check if the product already exists in the cart
      const ifExist = prev.find((item) => item.id === product.id);

      if (ifExist) {
        // If product exists, update its quantity
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item 
        );
      } else {
        // If product doesn't exist, add it with quantity = 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      // Filter out the item with the given ID
      const result = prev.filter((items) => items.id !== id);
      return result;
    });
  };

  const total = cart.reduce(
    (acc, items) => acc + items.price * items.quantity,
    0
  );

  return (
    <>
    
      <ShopProvider.Provider value={{ cart, addToCart, removeFromCart, total }}>
        {children}
      </ShopProvider.Provider>
    </>
  );
};

export const useShop = () => useContext(ShopProvider);
