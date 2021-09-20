import React from 'react';
import Product from './Product';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Amazon Products!</h1>
      <Product
        name="Amazon Echo"
        description="Your AI Assistant"
        price={59.99}
      />
    </div>
  );
}
