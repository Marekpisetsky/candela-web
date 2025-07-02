import { motion } from 'framer-motion';
import { FaEye, FaHands, FaFeatherAlt } from 'react-icons/fa';

function Valores() {
  const valores = [
    {
      icono: <FaFeatherAlt className="text-3xl text-rose-600 mb-3" />,
      titulo: 'Claridad',
      texto:
        'Creemos en lo simple, lo esencial y lo comprensible. Cada decisión importa.',
    },
    {
      icono: <FaHands className="text-3xl text-rose-600 mb-3" />,
      titulo: 'Compromiso',
      texto:
        'Cuidamos lo que creamos. Trabajamos con intención, no por inercia.',
    },
    {
      icono: <FaEye className="text-3xl text-rose-600 mb-3" />,
      titulo: 'Autenticidad',
      texto:
        'No prometemos humo. Lo nuestro enciende realidades con propósito.',
    },
  ];

  return (
    <motion.section
      id="valores"
      className="scroll-mt-24 bg-gray-50 py-20 px-6 text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
        <p className="text-lg text-gray-600">
          Lo que nos sostiene, enciende y representa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {valores.map((valor, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            {valor.icono}
            <h3 className="text-xl font-semibold mb-2">{valor.titulo}</h3>
            <p className="text-gray-700">{valor.texto}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Valores;
