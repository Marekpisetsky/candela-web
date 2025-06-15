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
    <section id="testimonios" className="scroll-mt-24 bg-white py-20 px-4 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Lo que dicen de nosotros</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 p-8 rounded-xl shadow-md flex flex-col items-center"
          >
            <img
              src={current.avatar}
              alt={current.nombre}
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-white shadow"
            />
            <p className="text-lg italic mb-4 text-gray-700">"{current.texto}"</p>
            <h4 className="text-sm font-semibold text-rose-600">— {current.nombre}</h4>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Testimonios;
