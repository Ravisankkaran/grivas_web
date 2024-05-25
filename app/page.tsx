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


      <Navbar />
      <Hero />
      <About />
      <Slider/>
      <Testimonials />
      <Enquire />
      <Footer />
      
    </div>
  );
}
export default Home;
