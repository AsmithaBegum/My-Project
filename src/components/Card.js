// src/components/Card.js
import React from 'react';

const Card = ({ foodItem }) => {
  return (
    <div className="food-card">
      <img src={foodItem.img} alt={foodItem.name} />
      <h3>{foodItem.name}</h3>
      <p>{foodItem.description}</p>
      <span>${foodItem.price}</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;
