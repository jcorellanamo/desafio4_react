import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="banner-container text-center">
      <img src="/banner.jpg" alt="Banner" className="banner-image" />
      <div className="banner-text">
        <h1 className="title">Pizzería Mamma Mía</h1>
        <p className="subtitle">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;
