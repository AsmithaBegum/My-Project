// src/pages/Checkout.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
  return (
    <div>
      <Header />
      <div className="checkout">
        <h2>Checkout</h2>
        <p>Thank you for your order! Please proceed with payment.</p>
        {/* You can expand this with forms to collect shipping information, payment, etc. */}
        <button>Confirm Order</button>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
