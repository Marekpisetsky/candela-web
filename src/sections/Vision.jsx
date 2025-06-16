import { motion } from 'framer-motion';
import { FaRegLightbulb } from 'react-icons/fa';

function Vision() {
  return (
    <motion.section
      id="vision"
      className="scroll-mt-24 bg-white py-24 px-6 text-gray-900 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose-100 text-rose-600 mb-6 shadow"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <FaRegLightbulb className="text-3xl" />
      </motion.div>

      <h2 className="text-4xl font-bold mb-4">Nuestra Visión</h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Iluminar hogares, inspirar decisiones y construir futuro con cada vela.
        <br />
        Encendemos ideas que brillan, duran y dejan huella.
      </p>
    </motion.section>
  );
}

export default Vision;
