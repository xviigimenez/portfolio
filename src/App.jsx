import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Curriculo from './components/Curriculo';

export function UnderConstruction() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <h2 className="text-center text-2xl font-bold">Site sob construção!</h2>
        <img src="/under-construction.gif" alt="GIF de um desenho animado" />
      </div>
    </div>
  );
}

export default function App() {
  const [modo, setModo] = useState('landing');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            {modo === 'landing' && (
              <>
                <Hero onVerCurriculo={() => setModo('curriculo')} />
                <Sobre />
                <Projetos />
                <Contato />
              </>
            )}
            {modo === 'curriculo' && (
              <>
                <Curriculo onVerLanding={() => setModo('landing')} />
              </>
            )}
            <Footer />
          </>
        }
      />
      <Route path="/portfolio" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
