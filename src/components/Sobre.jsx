import {
  faArchLinux,
  faDebian,
  faFigma,
  faJava,
  faJs,
  faLinux,
  faNodeJs,
  faPython,
  faReact,
  faTailwindCss,
  faUbuntu,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

export function Tag({ nome, corFundo, fundoHover, fundoActive, icone }) {
  return (
    <div
      data-tag
      data-fundo={corFundo}
      className={`flex items-center py-px px-2 rounded-xl bg-gray-500 ${fundoHover} ${fundoActive} transition-colors duration-300 text-sm text-white`}
    >
      <FontAwesomeIcon icon={icone} />
      {nome}
    </div>
  );
}

export default function Sobre() {
  useEffect(() => {
    const section = document.querySelector('#sobre');
    const tags = Array.from(document.querySelectorAll('[data-tag]')).slice(
      0,
      3,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();

          setTimeout(() => {
            tags.forEach((tag, index) => {
              setTimeout(() => {
                const fundo = tag.dataset.fundo;
                tag.classList.replace('bg-gray-500', fundo);

                setTimeout(() => {
                  tag.classList.replace(fundo, 'bg-gray-500');
                }, 750);
              }, index * 750);
            });
          }, 2500);
        }
      },
      { threshold: 0.4 },
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <section
          id="sobre"
          className="flex md:flex-row flex-col items-center gap-6 min-h-[500px] md:w-1/2 w-full py-20 px-8"
        >
          <img src="/gustavo.png" className="size-36 rounded-full"></img>
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-xl font-bold">Sobre</h2>
            <p>
              Apaixonado por tecnologia, mas motivado verdadeiramente pelas
              pessoas que a utilizam. Tenho experiência em desenvolvimento,
              design, implantação de sistemas e comunicação, unindo visão
              técnica e sensibilidade humana para trazer soluções intuitivas e
              alinhadas às necessidades reais dos usuários. No tempo livre, ouço
              jazz, pratico ciclismo e - modéstia à parte - faço o melhor coado
              que conheço.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag
                nome={'React'}
                corFundo={'bg-sky-400'}
                fundoHover={'hover:bg-sky-400'}
                fundoActive={'active:bg-sky-400'}
                icone={faReact}
              />
              <Tag
                nome={'Debian'}
                corFundo={'bg-pink-700'}
                fundoHover={'hover:bg-pink-700'}
                fundoActive={'active:bg-pink-700'}
                icone={faDebian}
              />
              <Tag
                nome={'Ubuntu'}
                corFundo={'bg-orange-500'}
                fundoHover={'hover:bg-orange-500'}
                fundoActive={'active:bg-orange-500'}
                icone={faUbuntu}
              />
              <Tag
                nome={'Arch'}
                corFundo={'bg-sky-500'}
                fundoHover={'hover:bg-sky-500'}
                fundoActive={'active:bg-sky-500'}
                icone={faArchLinux}
              />
              <Tag
                nome={'Python'}
                corFundo={'bg-amber-400'}
                fundoHover={'hover:bg-amber-400'}
                fundoActive={'active:bg-amber-400'}
                icone={faPython}
              />
              <Tag
                nome={'Node.js'}
                corFundo={'bg-green-700'}
                fundoHover={'hover:bg-green-700'}
                fundoActive={'active:bg-green-700'}
                icone={faNodeJs}
              />
              <Tag
                nome={'TailwindCSS'}
                corFundo={'bg-cyan-400'}
                fundoHover={'hover:bg-cyan-400'}
                fundoActive={'active:bg-cyan-400'}
                icone={faTailwindCss}
              />
              <Tag
                nome={'JavaScript'}
                corFundo={'bg-yellow-400'}
                fundoHover={'hover:bg-yellow-400'}
                fundoActive={'active:bg-yellow-400'}
                icone={faJs}
              />
              <Tag
                nome={'Figma'}
                corFundo={'bg-pink-500'}
                fundoHover={'hover:bg-pink-500'}
                fundoActive={'active:bg-pink-500'}
                icone={faFigma}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
