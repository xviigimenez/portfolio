import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export function Tag({ nome, fundo, icone }) {
  return (
    <div
      className={`flex items-center py-px px-2 rounded-xl ${fundo} text-sm text-white`}
    >
      <FontAwesomeIcon icon={icone} />
      {nome}
    </div>
  );
}

export default function Sobre() {
  return (
    <>
      <div className="flex justify-center">
        <section
          id="sobre"
          className="flex md:flex-row flex-col items-center gap-6 md:w-1/2 w-full py-16 px-8"
        >
          <img src="/profile.jpg" className="size-32 rounded-full"></img>
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-xl font-bold">Sobre</h2>
            <p>
              Apaixonado por resolver problemas que possuem um impacto real.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tag nome={'React'} fundo={'bg-sky-400'} icone={faReact} />
              <Tag nome={'Debian'} fundo={'bg-pink-700'} icone={faDebian} />
              <Tag nome={'Ubuntu'} fundo={'bg-orange-500'} icone={faUbuntu} />
              <Tag nome={'Arch'} fundo={'bg-sky-500'} icone={faArchLinux} />
              <Tag nome={'Python'} fundo={'bg-amber-400'} icone={faPython} />
              <Tag nome={'Node.js'} fundo={'bg-green-700'} icone={faNodeJs} />
              <Tag
                nome={'TailwindCSS'}
                fundo={'bg-cyan-400'}
                icone={faTailwindCss}
              />
              <Tag nome={'JavaScript'} fundo={'bg-yellow-400'} icone={faJs} />
              <Tag nome={'Figma'} fundo={'bg-pink-500'} icone={faFigma} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
