import React from "react";

const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text"><strong>Precio:</strong> ${price}</p>
        <h6>Ingredientes:</h6>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default CardPizza;
