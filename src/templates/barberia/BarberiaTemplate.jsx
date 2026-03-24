import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import IntroServicios from "./components/IntroServicios";
import Ubicacion from "./components/Ubicacion";
import WhatsappFloat from "./components/WhatsappFloat";

function BarberiaTemplate() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <IntroServicios />
      <Ubicacion />
      <WhatsappFloat />
      <Footer />
    </>
  );
}

export default BarberiaTemplate;
