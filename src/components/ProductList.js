// src/components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
          <ProductItem product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
