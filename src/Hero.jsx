import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section id="inicio"
      className="scroll-mt-24 text-center py-24 px-4 bg-white text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Energía que transforma.
      </h2>
      <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
        En Candela creemos en el poder de lo simple, lo claro y lo brillante.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
      >
        Conócenos
      </motion.button>
    </motion.section>
  );
}

export default Hero;
