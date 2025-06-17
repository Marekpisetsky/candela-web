import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonios } from '../data/Testimonios';

function Testimonios() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonios.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, []);

  const current = testimonios[index];

  return (
    <section id="testimonios" className="scroll-mt-24 bg-white relative py-24 px-4 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Lo que dicen de nosotros</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-10 rounded-2xl shadow-lg max-w-xl mx-auto border border-rose-100"
          >
            <img
              src={current.avatar}
              alt={current.nombre}
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-white shadow-md mx-auto"
            />
            <p className="text-lg italic mb-4 text-gray-700 leading-relaxed">“{current.texto}”</p>
            <h4 className="text-sm font-semibold text-rose-600">— {current.nombre}</h4>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Patrón decorativo suave en fondo */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24 opacity-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="#e11d48" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </section>

  );
}

export default Testimonios;
