import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');
    const visibleSections = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        navLinks.forEach((l) =>
          l.classList.replace('text-black', 'text-gray-500'),
        );

        for (const id of visibleSections) {
          const link = document.querySelector(`nav a[href="#${id}"]`);
          if (link) {
            link.classList.replace('text-gray-500', 'text-black');
            break;
          }
        }
      },
      { threshold: 0.9 },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 h-14 bg-white border-b border-gray-200">
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
        <a href="#contato" className="text-lg text-gray-500 hover:text-black">
          contato
        </a>
      </nav>
    </header>
  );
}
