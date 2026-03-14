import business from "../data/business";
import "../styles/IntroServicios.css";
import { useEffect } from "react";
import { animateOnScroll } from "../utils/scroll-animations";

function IntroServicios() {
  useEffect(() => {
    animateOnScroll('.intro-servicios .intro-col', 'animate-in');
    animateOnScroll('.intro-servicios .img-col', 'animate-in');
    animateOnScroll('.intro-servicios .estadisticas-section', 'animate-in');
    animateOnScroll('.intro-servicios .beneficios-section', 'animate-in');
  }, []);

  return (
    <section id="servicios" className="intro-servicios grid-hero">
      <div className="intro-col">
        <div className="headline-negocio">
          <span className="negocio-nombre">Barbería Luxury</span>
          <h2>Transforma tu estilo.<br />Vive la experiencia.</h2>
          <p className="negocio-desc">Cortes modernos, ambiente profesional y atención personalizada. Reserva tu cita hoy mismo.</p>
        </div>
        <div className="servicios-grid">
          {business.services.map((service, index) => (
            <div className="servicio-card" key={index}>{service}</div>
          ))}
        </div>
      </div>
      <div className="img-col">
        <img src={new URL('../assets/introservicios.webp', import.meta.url).href} alt="Barbería" />
      </div>
      <div className="estadisticas-section">
        <div className="estadistica-item">
          <span className="estadistica-numero">+500</span>
          <span className="estadistica-texto">Cortes realizados</span>
        </div>
        <div className="estadistica-item">
          <span className="estadistica-numero">50+</span>
          <span className="estadistica-texto">Clientes satisfechos cada semana</span>
        </div>
        <div className="estadistica-item">
          <span className="estadistica-numero">5+</span>
          <span className="estadistica-texto">Barberos con experiencia</span>
        </div>
      </div>
      <div className="beneficios-section">
        <div className="beneficio-item">
          <svg className="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="var(--dorado-suave)"/>
            <path d="M8 12.5L10.5 15L16 9.5" stroke="var(--marron-oscuro)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Barberos profesionales</span>
        </div>
        <div className="beneficio-item">
          <svg className="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="var(--dorado-suave)"/>
            <path d="M8 12.5L10.5 15L16 9.5" stroke="var(--marron-oscuro)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Ambiente premium</span>
        </div>
        <div className="beneficio-item">
          <svg className="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="var(--dorado-suave)"/>
            <path d="M8 12.5L10.5 15L16 9.5" stroke="var(--marron-oscuro)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Atención personalizada</span>
        </div>
        <div className="beneficio-item">
          <svg className="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="var(--dorado-suave)"/>
            <path d="M8 12.5L10.5 15L16 9.5" stroke="var(--marron-oscuro)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Productos de calidad</span>
        </div>
      </div>
    </section>
  );
}

export default IntroServicios;
