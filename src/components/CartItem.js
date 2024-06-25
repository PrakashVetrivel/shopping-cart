// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item card mb-3">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description}</p>
        <button className="btn btn-danger" onClick={() => removeFromCart(item)}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartItem;
