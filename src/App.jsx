import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DemosHome from './pages/DemosHome';
import BarberiaTemplate from './templates/barberia/BarberiaTemplate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DemosHome />} />
        <Route path="/barberia" element={<BarberiaTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
