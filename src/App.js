// src/App.js
import React from 'react';
import './produit.css';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import products from './product';
import userPhoto from './images/user-photo.jpg';

const App = () => {
  const firstName = 'there';
  return (
    <div className="container">
      <div className="user-section">
        <img src={userPhoto} alt="User" className="user-photo" />
        <h1 className="greeting">Hello, {firstName ? firstName : 'there'}!</h1>
      </div>
      {products.map((product, index) => (
        <div className="card" key={index}>
          <img src={product.imageUrl} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <Name name={product.name} />
            <Price price={product.price} />
            <Description description={product.description} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
