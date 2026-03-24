import business from "../data/business";
import "../styles/Servicios.css";

function Servicios() {
  return (
    <section id="servicios" className="servicios-premium">
      <div className="servicios-header">
        <div className="section-divider">
          <span className="divider-line"></span>
          <span className="divider-icon">✦</span>
          <span className="divider-line"></span>
        </div>
        <h2 className="section-title">NUESTROS SERVICIOS</h2>
      </div>
      
      <div className="servicios-grid">
        {business.services.map((service, index) => (
          <div className="servicio-card-premium" key={index}>
            <div className="servicio-image-placeholder">
              <div className="servicio-overlay">
                <h3>{service.name}</h3>
                <p className="servicio-price">{service.price}</p>
              </div>
            </div>
            <div className="servicio-info">
              <p>{service.description}</p>
              <a href="#reservas" className="ver-mas">Ver más</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
