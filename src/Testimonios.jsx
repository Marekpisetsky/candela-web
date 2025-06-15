import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const testimonios = [
  {
    nombre: "Luis Fernández",
    texto: "Candela transformó por completo nuestra eficiencia energética. El equipo es excelente.",
    avatar: "https://ui-avatars.com/api/?name=Luis+Fernandez&background=F87171&color=fff&size=256"
  },
  {
    nombre: "Ana Vega",
    texto: "Trabajar con Candela fue una experiencia profesional, humana y muy inspiradora.",
    avatar: "https://ui-avatars.com/api/?name=Ana+Vega&background=F472B6&color=fff&size=256"
  },
  {
    nombre: "Carlos Lima",
    texto: "No solo redujimos costos, sino que aprendimos mucho sobre sostenibilidad real.",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Lima&background=60A5FA&color=fff&size=256"
  },
];

function Testimonios() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonios.length);
    }, 4000);

    return () => clearInterval(interval);
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
