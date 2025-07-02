import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', to: 'inicio', offset: -80 },
    { name: 'Servicios', to: 'servicios', offset: -50 },
    { name: 'Nosotros', to: 'nosotros', offset: -50 },
    { name: 'Propósito', to: 'proposito', offset: -50 },
    { name: 'Valores', to: 'valores', offset: -50 },
    { name: 'Visión', to: 'vision', offset: -50 },
    { name: 'Testimonios', to: 'testimonios', offset: -100 },
    { name: 'Catálogo', to: 'catalog', offset: -50 },
    { name: 'Contacto', to: 'contacto', offset: -50 },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-rose-600">Candela</h1>

        {/* Botón móvil */}
        <button
          className="md:hidden text-rose-600 text-2xl"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          ☰
        </button>

        {/* Menú escritorio */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
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
      </div>

      {/* Menú móvil off-canvas */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel lateral */}
            <motion.div
              className="fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg p-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <button
                className="text-rose-600 text-2xl mb-4"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar menú"
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
