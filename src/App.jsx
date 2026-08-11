import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Contato from './components/Contato';
import Curriculo from './components/Curriculo';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projetos from './components/Projetos';
import Sobre from './components/Sobre';

export default function App() {
  const [modo, setModo] = useState('landing');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header onVerLanding={() => setModo('landing')} modo={modo} />
            <AnimatePresence mode="wait">
              <motion.div
                key={modo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {modo === 'landing' && (
                  <>
                    <Hero onVerCurriculo={() => setModo('curriculo')} />
                    <Sobre />
                    <Projetos />
                    <Contato />
                  </>
                )}
                {modo === 'curriculo' && (
                  <Curriculo onVerLanding={() => setModo('landing')} />
                )}
              </motion.div>
            </AnimatePresence>
            <Footer />
          </>
        }
      />
      <Route path="/portfolio" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
