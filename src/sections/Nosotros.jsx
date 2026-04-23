import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

function Nosotros() {
  const { copy } = useLanguage();

  return (
    <section
      id="nosotros"
      className="scroll-mt-24 bg-white py-20 px-6 text-gray-900"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {copy.about.title}
          </h2>
          <p className="text-lg text-gray-700 mb-4">{copy.about.body1}</p>
          <p className="text-gray-600">{copy.about.body2}</p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="/img/equipo.jpg"
            alt={copy.about.imageAlt}
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Nosotros;
