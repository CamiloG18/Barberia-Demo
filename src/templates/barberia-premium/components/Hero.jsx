import "../styles/Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero-premium">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          ELEVA TU ESTILO<br />
          <span className="hero-subtitle">al siguiente nivel</span>
        </h1>
        <div className="hero-features">
          <div className="hero-feature">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <strong>RESERVA RÁPIDA ONLINE</strong>
              <p>En menos de 30 segundos</p>
            </div>
          </div>
          
          <div className="hero-feature">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 11L12 14L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <strong>PRODUCTOS PREMIUM</strong>
              <p>Solo primeras marcas</p>
            </div>
          </div>
          
          <div className="hero-feature">
            <svg className="feature-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <strong>BARBEROS EXPERTOS</strong>
              <p>+10 años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
