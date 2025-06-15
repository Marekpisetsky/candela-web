import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-rose-600">Candela</h1>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-rose-600 text-2xl"
          onClick={toggleMenu}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          ☰
        </button>


        {/* Menú escritorio */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            <li><a href="#inicio" onClick={() => setIsOpen(false)} className="hover:text-rose-600">Inicio</a></li>
            <li><a href="#servicios" onClick={() => setIsOpen(false)} className="hover:text-rose-600">Servicios</a></li>
            <li><a href="#nosotros" onClick={() => setIsOpen(false)} className="hover:text-rose-600">Nosotros</a></li>
            <li><a href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-rose-600">Contacto</a></li>
        </ul>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700 font-medium overflow-hidden"
        >
          <li><a href="#inicio" onClick={() => setIsOpen(false)} className="hover:text-rose-600">Inicio</a></li>
          <li><a href="#servicios" onClick={() => setIsOpen(false)} className="hover:text-rose-600">Servicios</a></li>
          <li><a href="#nosotros" onClick={() => setIsOpen(false)} className="hover:text-rose-600">Nosotros</a></li>
          <li><a href="#contacto" onClick={() => setIsOpen(false)} className="hover:text-rose-600">Contacto</a></li>
        </motion.ul>
      )}
    </AnimatePresence>


    </nav>
  );
}

export default Navbar;
