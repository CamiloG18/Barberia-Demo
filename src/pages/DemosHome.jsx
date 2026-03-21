import { Link } from 'react-router-dom';
import './DemosHome.css';

function DemosHome() {
  const templates = [
    {
      id: 'barberia',
      name: 'Barbería',
      description: 'Template moderno para barberías con diseño elegante y profesional',
      path: '/barberia',
      image: '/previews/barberia.jpg',
      category: 'Servicios',
      status: 'Disponible'
    },
    {
      id: 'barberia-premium',
      name: 'Barbería Premium',
      description: 'Versión premium con características avanzadas y animaciones',
      path: '/barberia-premium',
      image: '/previews/barberia-premium.jpg',
      category: 'Servicios',
      status: 'Próximamente'
    },
    {
      id: 'hotel',
      name: 'Hotel',
      description: 'Template elegante para hoteles y hospedajes',
      path: '/hotel',
      image: '/previews/hotel.jpg',
      category: 'Hospitalidad',
      status: 'Próximamente'
    },
    {
      id: 'hotel-premium',
      name: 'Hotel Premium',
      description: 'Versión premium para hoteles de lujo',
      path: '/hotel-premium',
      image: '/previews/hotel-premium.jpg',
      category: 'Hospitalidad',
      status: 'Próximamente'
    }
  ];

  return (
    <div className="demos-home">
      <header className="demos-header">
        <div className="header-content">
          <h1>Corfyx Demos</h1>
          <p className="subtitle">Explora nuestros templates profesionales para tu negocio</p>
        </div>
      </header>

      <main className="demos-main">
        <div className="templates-grid">
          {templates.map((template) => (
            <div key={template.id} className={`template-card ${template.status === 'Próximamente' ? 'coming-soon' : ''}`}>
              <div className="template-image">
                <div className="image-placeholder">
                  <span>{template.name}</span>
                </div>
                {template.status === 'Próximamente' && (
                  <div className="coming-soon-badge">Próximamente</div>
                )}
              </div>
              <div className="template-info">
                <div className="template-header">
                  <h3>{template.name}</h3>
                  <span className="category-badge">{template.category}</span>
                </div>
                <p className="template-description">{template.description}</p>
                {template.status === 'Disponible' ? (
                  <Link to={template.path} className="view-demo-btn">
                    Ver Demo
                  </Link>
                ) : (
                  <button className="view-demo-btn disabled" disabled>
                    Próximamente
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="demos-footer">
        <p>© 2026 Corfyx. Todos los derechos reservados.</p>
        <p className="contact-info">
          ¿Interesado en un template? <a href="https://wa.me/573043253309?text=Hola!%0AEstoy%20interesado%20en%20los%20templates%20de%20Corfyx" target="_blank" rel="noopener noreferrer">Contáctanos</a>
        </p>
      </footer>
    </div>
  );
}

export default DemosHome;
