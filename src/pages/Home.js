// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import FoodItem from '../components/FoodItem';
import Category from '../components/Category';
import Footer from '../components/Footer';
import './styles.css';

const Home = () => {
    const homeStyle = {
        backgroundImage: 'url(background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
      };  
  const categories = ['Pizza', 'Burgers', 'Pasta', 'Drinks'];

  return (
    <div style={homeStyle}>
      <Header />
      <Category categories={categories} />
      <FoodItem />
      <Footer />
    </div>
  );
};

export default Home;
