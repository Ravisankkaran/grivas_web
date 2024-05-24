import Navbar from "./Components/NavBar/Navbar";

import Enquire from "./Components/Enquire/Enquire";

import Testimonials from "./Components/Testimonials/Testimonials";
import About from "./Components/aboutus/About";
import Footer from "./Components/Footer/Footer";
function Home() {
  return (
    <div className="body">
      <Navbar />
      
      <About />
    
      <Testimonials />
      <Enquire />
      <Footer />
      
    </div>
  );
}
export default Home;
