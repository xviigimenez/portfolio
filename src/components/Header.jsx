import { useEffect } from 'react';

export default function Header({ onVerLanding, modo }) {
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

        navLinks.forEach((l) => {
          l.classList.replace('text-black', 'text-gray-500');
          l.classList.add('hidden');
        });

        for (const id of visibleSections) {
          const link = document.querySelector(`nav a[href="#${id}"]`);
          if (link) {
            link.classList.replace('text-gray-500', 'text-black');
            link.classList.remove('hidden');
            break;
          }
        }
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 h-14 bg-white border-b border-gray-200">
      <div>
        <h1 className="text-2xl">
          <button
            onClick={() => {
              if (modo === 'curriculo') onVerLanding();
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:text-gray-500 transition-colors cursor-pointer"
          >
            gustavo<span className="text-lg">.xyz.br</span>
          </button>
        </h1>
      </div>
      <nav className="flex items-center gap-4">
        {modo === 'landing' && (
          <>
            <a
              href="#sobre"
              className="hidden md:block text-lg text-gray-500 hover:text-black"
            >
              sobre
            </a>
            <a
              href="#projetos"
              className="hidden md:block text-lg text-gray-500 hover:text-black"
            >
              projetos
            </a>
            <a
              href="#contato"
              className="hidden md:block text-lg text-gray-500 hover:text-black"
            >
              contato
            </a>
          </>
        )}
      </nav>
    </header>
  );
}
