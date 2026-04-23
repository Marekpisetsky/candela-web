import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

function Servicios() {
  const { copy } = useLanguage();

  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-gray-100 py-20 px-4 text-gray-900"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">{copy.services.title}</h2>
        <p className="text-lg text-gray-600">{copy.services.intro}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {copy.services.items.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-rose-600">
              {service.title}
            </h3>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
