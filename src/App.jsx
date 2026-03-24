import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DemosHome from './pages/DemosHome';
import BarberiaTemplate from './templates/barberia/BarberiaTemplate';
import BarberiaPremiumTemplate from './templates/barberia-premium/BarberiaPremiumTemplate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemosHome />} />
        <Route path="/barberia" element={<BarberiaTemplate />} />
        <Route path="/barberia-premium" element={<BarberiaPremiumTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
