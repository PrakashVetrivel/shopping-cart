// src/components/ProductItem.js
import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item card h-100">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
