import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // DESAFIO 4
//import Pizza from './components/Pizza'; // DESAFIO 4
// import Register from './components/Register';
// import Login from './components/Login';
import Cart from './components/Cart';
import { pizzaCart } from './pizzas';


const App = () => {
  const [cart, setCart] = useState(pizzaCart);
  const [pizzas, setPizzas] = useState([]); // Nuevo estado para almacenar las pizzas de la API
  const [token, setToken] = useState(false);

  // Hook para obtener las pizzas de la API
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error al obtener las pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

  const increaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return null;
        }
      }
      return item;
    }).filter(item => item !== null));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="app">
      <Navbar total={calculateTotal()} token={token} />
      <div className="container-fluid">
        <Home pizzas={pizzas} />
        {/* <Register /> */}
        {/* <Login /> */}
        {/*<Pizza />*/}
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          calculateTotal={calculateTotal}
        />
      </div>
    </div>
  );
};

export default App;
