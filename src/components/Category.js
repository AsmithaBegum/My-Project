// src/components/Category.js
import React from 'react';

const Category = ({ categories }) => {
  return (
    <div className="category-menu">
      {categories.map((category, index) => (
        <button key={index} className="category-button">
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;
