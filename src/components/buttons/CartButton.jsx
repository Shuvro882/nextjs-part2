"use client";
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react'

const CartButton = ({food}) => {
    const [incart, setIncart] = useState(false);
    const {addToCart} = use(CartContext);
    const handleAddToCart = () =>{
      addToCart(food);
      setIncart(true);
    }
  return (
    <button
    onClick={handleAddToCart}
    disabled={incart}
    className="flex-1 bg-orange-500 text-white py-2 rounded-lg
     hover:bg-orange-600 transition disabled:bg-gray-400 disabled:font-gray-100">
            
            {incart ? "Added" : "Add to Cart"}
    </button>
  )
}

export default CartButton;