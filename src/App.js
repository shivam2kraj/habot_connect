import Navbar from "./components/navbar";
import Hero from "./components/hero"
import Project from "./components/project";
import ServiceSection from "./components/service";
import SupplierSection from "./components/section";
import HowItWorks from "./components/how";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar/>
      <br/><br/><br/>
      <Hero />
      < Project />
      < ServiceSection />
      <br/><br/><br/> <br/><br/>
      <SupplierSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
