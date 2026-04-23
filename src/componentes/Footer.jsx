import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm md:text-base text-gray-400 text-center md:text-left">
          &copy; {new Date().getFullYear()} Candela. {copy.footer.rights}
        </p>

        <div className="flex space-x-6 text-lg">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
