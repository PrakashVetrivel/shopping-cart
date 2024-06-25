// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h4>Cart</h4>
      {cartItems.length === 0 && <p>Your cart is empty</p>}
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
    </div>
  );
};

export default Cart;
