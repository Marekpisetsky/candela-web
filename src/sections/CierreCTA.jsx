import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';

function CierreCTA() {
  const { copy } = useLanguage();

  return (
    <motion.section
      id="cta"
      className="bg-rose-600 text-white py-24 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-extrabold mb-6">{copy.cta.title}</h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">{copy.cta.body}</p>

      <motion.div
        className="inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="contacto"
          smooth={true}
          duration={500}
          offset={-50}
          className="inline-block bg-white text-rose-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition cursor-pointer"
        >
          {copy.cta.button}
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default CierreCTA;
