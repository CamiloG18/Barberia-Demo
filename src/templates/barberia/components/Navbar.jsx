import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
      </div>
      
      <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
        <span className={isMenuOpen ? "bar open" : "bar"}></span>
      </button>

      <div className={`options ${isMenuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>Inicio</a>
        <a href="#servicios" onClick={closeMenu}>Servicios</a>
        <a href="#ubicacion" onClick={closeMenu}>Ubicación</a>
        <a href="#contacto" onClick={closeMenu}>Contacto</a>
        <a href="#contacto" className="mobile-reserve" onClick={closeMenu}>Reservar</a>
      </div>
      <div className="reserve">
        <button>Reservar</button>
      </div>
    </nav>
  );
}

export default Navbar;
