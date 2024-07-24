import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <img src="https://d2q79iu7y748jz.cloudfront.net/s/_squarelogo/0b844a587437eee9926b199c58a82b2c" alt="Springdale Public School Logo" className="logo" />
      <p className="introduction">Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
      <div className="carousel">
        <div className="carousel-item">Annual Sports Day - Celebrating Excellence in Sports</div>
        <div className="carousel-item">Science Exhibition - Showcasing Student Innovations</div>
        <div className="carousel-item">Cultural Fest - Embracing Diversity and Creativity</div>
      </div>
    </div>
  );
}

export default Home;
