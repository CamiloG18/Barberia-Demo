import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
      </div>
      <div className="options">
        <a href="#home">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#ubicacion">Ubicación</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="reserve">
        <button>Reservar</button>
      </div>
    </nav>
  );
}

export default Navbar;
