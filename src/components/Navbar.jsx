import React from 'react';
import './Navbar.css';

const Navbar = ({ total, token }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button className="btn btn-dark nav-link">🍕 Home</button>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <button className="btn btn-dark nav-link">🔓 Profile</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark nav-link">🔒 Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <button className="btn btn-dark nav-link">🔐 Login</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-dark nav-link">🔐 Register</button>
              </li>
            </>
          )}
        </ul>
        <button className="btn btn-primary ml-auto mr-0">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
