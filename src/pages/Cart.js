// src/pages/Cart.js
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
  // Sample cart data
  const cartItems = [
    { name: 'Pizza', quantity: 1, price: 12 },
    { name: 'Burger', quantity: 2, price: 8 },
    { name: 'Pasta', quantity: 3, price: 15 },
    { name: 'Drinks', quantity: 4, price: 10 },
    { name: 'Chicken', quantity: 5, price: 30 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Navigate hook to programmatically navigate to the checkout page
  const navigate = useNavigate();

  // Function to handle "Proceed to Checkout" button click
  const handleCheckout = () => {
    // You can add any logic you want here (e.g., saving cart data, confirming user is logged in)
    // For now, we'll redirect the user to the checkout page
    navigate('/checkout');
  };

  return (
    <div>
      <Header />
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity} = ${item.price * item.quantity}
            </li>
          ))}
        </ul>
        <h3>Total: ${total}</h3>
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
