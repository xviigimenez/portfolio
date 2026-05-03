export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 h-14 border-b border-gray-200">
      <div>
        <h1 className="text-2xl">
          gustavo<span className="text-lg">.xyz.br</span>
        </h1>
      </div>
      <nav className="hidden md:flex items-center gap-4">
        <a href="#sobre" className="text-lg text-gray-500 hover:text-black">
          sobre
        </a>
        <a href="#projetos" className="text-lg text-gray-500 hover:text-black">
          projetos
        </a>
        <a href="#eventos" className="text-lg text-gray-500 hover:text-black">
          eventos
        </a>
        <a href="#contatos" className="text-lg text-gray-500 hover:text-black">
          contato
        </a>
      </nav>
    </header>
  );
}
