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
    <nav className="navbar-premium">
      <div className="navbar-container">
        <div className="logo-premium">
          <span className="logo-text">Barbería</span>
          <span className="logo-subtitle">PREMIUM</span>
        </div>
        
        <button className="hamburger-premium" onClick={toggleMenu} aria-label="Menu">
          <span className={isMenuOpen ? "bar-premium open" : "bar-premium"}></span>
          <span className={isMenuOpen ? "bar-premium open" : "bar-premium"}></span>
          <span className={isMenuOpen ? "bar-premium open" : "bar-premium"}></span>
        </button>

        <div className={`nav-links-premium ${isMenuOpen ? "active" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>INICIO</a>
          <a href="#servicios" onClick={closeMenu}>SERVICIOS</a>
          <a href="#nosotros" onClick={closeMenu}>NOSOTROS</a>
          <a href="#galeria" onClick={closeMenu}>GALERÍA</a>
          <a href="#reservas" onClick={closeMenu}>RESERVAS</a>
          <a href="#contacto" onClick={closeMenu}>CONTACTO</a>
        </div>
        
        <div className="cta-button-container">
          <a href="#reservas" className="cta-button-premium">RESERVAR CITA</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
