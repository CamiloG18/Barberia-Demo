import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/SobreNosotros";
import Galeria from "./components/Galeria";
import Reserva from "./components/Reserva";
import Footer from "./components/Footer";

function BarberiaPremiumTemplate() {
  return (
    <div className="barberia-premium-template">
      <Navbar />
      <Hero />
      <Servicios />
      <SobreNosotros />
      <Galeria />
      <Reserva />
      <Footer />
    </div>
  );
}

export default BarberiaPremiumTemplate;
