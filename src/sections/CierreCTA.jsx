import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function CierreCTA() {
  return (
    <motion.section
      id="cta"
      className="bg-rose-600 text-white py-24 px-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-extrabold mb-6">
        ¿Listo para encender tu próxima idea?
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Creamos más que velas. Creamos momentos, mensajes y energía que
        transforma.
      </p>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          to="contacto"
          smooth={true}
          duration={500}
          offset={-50}
          className="inline-block bg-white text-rose-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition cursor-pointer"
        >
          Hablemos
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default CierreCTA;
