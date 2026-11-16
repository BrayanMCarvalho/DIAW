import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Votacao from './pages/Votacao';
import Resultado from './pages/Resultado';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* O Header fica fora do Routes para aparecer em todas as páginas */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/votacao" element={<Votacao />} />
        <Route path="/resultado" element={<Resultado />} />
        {/* qualquer outro endereço volta para a Home, sem ficar no histórico */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="rodape">DIAW 2026, PUC Minas</footer>
    </BrowserRouter>
  );
}

export default App;
