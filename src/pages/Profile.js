// src/pages/Profile.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  return (
    <div>
      <Header />
      <div className="profile">
        <h2>Your Profile</h2>
        <p>Name: Asmitha</p>
        <p>Email: asmitha@example.com</p>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
