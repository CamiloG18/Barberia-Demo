import "../styles/Galeria.css";

function Galeria() {
  const trabajos = [
    { id: 1, title: "ANTES / DESPUÉS", type: "transformation" },
    { id: 2, title: "Corte Clásico", type: "haircut" },
    { id: 3, title: "Barba Estilizada", type: "beard" },
    { id: 4, title: "Afeitado Premium", type: "shave" },
    { id: 5, title: "Estilo Moderno", type: "modern" },
    { id: 6, title: "Interior Premium", type: "interior" }
  ];

  return (
    <section id="galeria" className="galeria-premium">
      <div className="galeria-header">
        <div className="section-divider">
          <span className="divider-line"></span>
          <span className="divider-icon">✦</span>
          <span className="divider-line"></span>
        </div>
        <h2 className="section-title">GALERÍA DE TRABAJOS</h2>
      </div>
      
      <div className="galeria-grid">
        {trabajos.map((trabajo) => (
          <div className="galeria-item" key={trabajo.id}>
            <div className="galeria-placeholder">
              <span>{trabajo.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Galeria;
