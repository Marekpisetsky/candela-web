import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-rose-600">Candela</h1>

        <button
          className="md:hidden text-rose-600 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><a href="#inicio" className="hover:text-rose-600">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-rose-600">Servicios</a></li>
          <li><a href="#nosotros" className="hover:text-rose-600">Nosotros</a></li>
          <li><a href="#contacto" className="hover:text-rose-600">Contacto</a></li>
        </ul>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700 font-medium overflow-hidden"
          >
            <li><button onClick={() => scrollToSection('inicio')} className="hover:text-rose-600">Inicio</button></li>
            <li><button onClick={() => scrollToSection('servicios')} className="hover:text-rose-600">Servicios</button></li>
            <li><button onClick={() => scrollToSection('nosotros')} className="hover:text-rose-600">Nosotros</button></li>
            <li><button onClick={() => scrollToSection('contacto')} className="hover:text-rose-600">Contacto</button></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;