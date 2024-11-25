// src/components/FoodItem.js
import React from 'react';
import Card from './Card';

const FoodItem = () => {
  const foodItems = [
    { name: 'Pizza', description: 'Delicious cheese pizza', price: 12, img: 'pizza1.jpg' },
    { name: 'Burger', description: 'Tasty beef burger', price: 8, img: 'burgerr.jpg' },
    { name: 'Pasta', description: 'Pasta with creamy sauce', price: 15, img: 'pasta.jpg' },
    { name: 'Drinks', description: 'Drinks for refreshment', price: 10, img: 'drinks.jpg' },
    { name: 'Chicken', description: 'Crispy Juicy chicken', price: 30, img: 'chicken.jpg' },
    { name: 'Mutton Biryani', description: 'Mutton Biryani', price: 180, img: 'MuttonBiryani.jpg' },
    // Add more items as needed
  ];

  return (
    <div className="food-list">
      {foodItems.map((item, index) => (
        <Card key={index} foodItem={item} />
      ))}
    </div>
  );
};

export default FoodItem;
