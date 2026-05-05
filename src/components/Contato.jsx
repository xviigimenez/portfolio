import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Endereco({ icone, link, texto }) {
  return (
    <div className="flex gap-2 text-gray-400 hover:text-gray-700 transition-color duration-200">
      <div className="flex items-center justify-center size-6 rounded-full bg-gray-400">
        <FontAwesomeIcon icon={icone} className="text-white"></FontAwesomeIcon>
      </div>
      <a href={link}>{texto}</a>
    </div>
  );
}

export default function Contato() {
  return (
    <section id="contato" className="pt-32 pb-16">
      <h2 className="text-3xl text-center py-4">Contato</h2>
      <p className="text-center">Vamos conversar e tomar um café?</p>
      <div className="flex justify-center gap-8 py-4">
        <Endereco
          icone={faEnvelope}
          link="mailto:gimenez@tuta.io"
          texto="gimenez@tuta.io"
        />
        <Endereco
          icone={faGithub}
          link="https://github.com/xviigimenez"
          texto="github.com/xviigimenez"
        />
        <Endereco
          icone={faLinkedin}
          link="https://www.linkedin.com/in/gustavo-gimenez-correa/"
          texto="linkedin.com/in/gustavo-gimenez-correa/"
        />
      </div>
    </section>
  );
}
