import React from 'react';
import './hero.css';

const hero: React.FC = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">Welcome to Our Website</h1>
      <p className="hero-subtitle">Your success starts here</p>
      <button className="hero-button">Get Started</button>
    </section>
  );
};

export default hero;
