import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero_page/hero";
import Enquire from "./Components/Enquire/Enquire";
import Testimonials from "./Components/Testimonials/Testimonials";
import About from "./Components/aboutus/About";
import Footer from "./Components/Footer/Footer";
function Home() {
  return (
    <div className="body">
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Enquire />
      <Footer />
      
    </div>
  );
}
export default Home;
