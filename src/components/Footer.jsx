import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 text-gray-400 text-sm">
      <p>
        Feito com <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> e{' '}
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>.
      </p>
    </footer>
  );
}
