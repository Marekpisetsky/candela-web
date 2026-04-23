import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';
import { languageOptions } from '../i18n/translations';

function LanguageSelector({ isMobile = false, label, language, setLanguage }) {
  return (
    <div
      className={`flex items-center gap-2 ${
        isMobile ? 'pt-4 border-t border-gray-200' : ''
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
        {label}
      </span>
      <div className="flex rounded-full bg-rose-50 p-1">
        {languageOptions.map((option) => (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              language === option.code
                ? 'bg-rose-600 text-white'
                : 'text-rose-700 hover:bg-rose-100'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, copy } = useLanguage();

  const links = copy.nav.links;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-4">
        <h1 className="text-xl font-bold text-rose-600">Candela</h1>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6 font-medium text-gray-700">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={link.offset}
                  className="hover:text-rose-600 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <LanguageSelector
            label={copy.nav.language}
            language={language}
            setLanguage={setLanguage}
          />
        </div>

        <button
          type="button"
          className="md:hidden text-rose-600 text-2xl"
          onClick={() => setIsOpen(true)}
          aria-label={copy.nav.openMenu}
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg p-6 flex flex-col gap-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <button
                type="button"
                className="self-start text-rose-600 text-2xl"
                onClick={() => setIsOpen(false)}
                aria-label={copy.nav.closeMenu}
              >
                ×
              </button>

              <ul className="space-y-4 font-medium text-gray-700">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={link.offset}
                      className="hover:text-rose-600 cursor-pointer block"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <LanguageSelector
                isMobile={true}
                label={copy.nav.language}
                language={language}
                setLanguage={setLanguage}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
