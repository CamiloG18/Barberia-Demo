import business from "../data/business";
import "../styles/Ubicacion.css";
import { useEffect } from "react";
import { animateOnScroll } from "../utils/scroll-animations";

function Ubicacion() {
  useEffect(() => {
    animateOnScroll('.ubicacion-section .mapa-container', 'animate-in');
    animateOnScroll('.ubicacion-section .ubicacion-info', 'animate-in');
  }, []);

  return (
    <section id="ubicacion" className="ubicacion-section grid-hero-ub">
      <div className="mapa-container">
        <iframe
          title="Ubicación Barbería"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.687921055014!2d-75.28188968467513!3d2.936964497854573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3b74b2f7d5e8f7%3A0x3c4c4e6e2a5b0e6b!2sNeiva%2C%20Huila!5e0!3m2!1ses-419!2sco!4v1700000000000!5m2!1ses-419!2sco"
          width="100%"
          height="260"
          style={{ border: 0, borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div></div>
      <div className="ubicacion-info ubicacion-info-hero">
        <h2 className="ubicacion-headline">¡Visítanos en Neiva!</h2>
        <p className="ubicacion-desc-big">Ubicación estratégica para tu comodidad.<br />
        <strong>¿Quieres que tus clientes te encuentren fácil?</strong></p>
        <p className="ubicacion-demo-mini">Incluye mapa interactivo y dirección visible.<br />
        <span style={{color: 'var(--dorado-suave)', fontWeight: 700}}>¡Así se ve tu negocio en una web profesional!</span></p>
        <div className="ubicacion-direccion-card">{business.address}</div>
      </div>
    </section>
  );
}
 
export default Ubicacion;