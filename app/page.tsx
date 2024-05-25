import Navbar from "./Components/NavBar/Navbar";
import React from 'react'
import Enquire from './Components/Enquire/Enquire';
import Hero from "./Components/Hero/Hero";
import Testimonials from "./Components/Testimonials/Testimonials";
import About from "./Components/aboutus/About";
import Footer from "./Components/Footer/Footer";
import Slider from "./Components/Gallery/Slider";
import Image  from 'next/image';
import Bg from '../public/assets/bg.png'; 
function Home() {
  return (
    <div className="body">
      <div className="body">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="products">
          <Slider />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="enquire">
          <Enquire />
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;