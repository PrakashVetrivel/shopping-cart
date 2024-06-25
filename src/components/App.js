// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'IPhone', description: 'IPhone 15 Pro' },
    { id: 2, name: 'Samsung', description: 'Samsung s24+' },
    { id: 3, name: 'Vivo', description: 'Vivo Y80 Pro' },
    // Add more products as needed
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <div>
      <header className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Shop in style</h1>
          <p className="lead">With this shop homepage template</p>
        </div>
      </header>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <ProductList products={products} addToCart={addToCart} />
          </div>
          <div className="col-md-4">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
