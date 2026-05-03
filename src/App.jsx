import Header from './components/Header';
import Hero from './components/Hero';

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
  return (
    <>
      <Header />
      <Hero />
      <UnderConstruction />
    </>
  );
}
