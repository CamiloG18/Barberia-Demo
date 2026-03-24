import business from "../data/business";
import "../styles/SobreNosotros.css";

function SobreNosotros() {
  return (
    <section id="nosotros" className="sobre-nosotros-premium">
      <div className="sobre-container">
        <div className="sobre-image">
          <div className="team-placeholder">
            <p>Imagen del equipo de barberos</p>
          </div>
        </div>
        
        <div className="sobre-content">
          <div className="sobre-badge">SOBRE NOSOTROS</div>
          <h2 className="sobre-title">{business.about.title}</h2>
          <p className="sobre-description">{business.about.description}</p>
          
          <ul className="sobre-features">
            <li>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +10 años de experiencia
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Productos de alta gama
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Atención personalizada
            </li>
          </ul>
          
          <a href="#contacto" className="sobre-cta">CONTÁCTANOS</a>
        </div>
      </div>
      
      <div className="stats-bar">
        {business.about.stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SobreNosotros;
