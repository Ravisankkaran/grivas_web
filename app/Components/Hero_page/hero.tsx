import React from 'react';
import './hero.css';

const hero: React.FC = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">EXPLORE CUTTING EDGE<span style={{ color: '#FFA901' }}><br/> GADGETS</span></h1>
      <p className="hero-subtitle">Witness the latest in smart home devices transforming the way.</p>
      <button className="hero-button">Get Started</button>
    </section>
  );
};

export default hero;
