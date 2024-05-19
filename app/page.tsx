import Navbar from "./Components/Navbar";
import Hero from "./Components/hero";
import Enquire from "./Components/Enquire";

function Home() {
  return (
    <div className="body">
      <Navbar />
      <Hero />
      <br/>
      <Enquire />
    </div>
  );
}
export default Home;
