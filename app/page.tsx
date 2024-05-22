import Navbar from "./Components/NavBar/Navbar";
import Hero from "./Components/Hero_page/hero";
import Enquire from "./Components/Enquire/Enquire";
import Gallery from "./Components/gallery/gallery";
import About from "./Components/aboutus/about";
function Home() {
  return (
    <div className="body">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Enquire />
      
    </div>
  );
}
export default Home;
