import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/pizzas/p001')
      .then(response => {
        setPizza(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data: ' + error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{pizza.name}</h2>
          <p className="text-muted">${pizza.price}</p>
          <p>{pizza.description}</p>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>{pizza.desc}</p>
          <button className="btn btn-primary mt-3">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
