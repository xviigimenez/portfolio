import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-2 text-gray-300">
      <p>
        Feito com <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> e{' '}
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>.
      </p>
    </footer>
  );
}
