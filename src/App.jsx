import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <div className="h-screen flex items-center justify-center">
        <div>
          <h2 className="text-center text-2xl font-bold">
            Site sob construção!
          </h2>
          <img src="/under-construction.gif" alt="GIF de um desenho animado" />
        </div>
      </div>
    </>
  );
}
