import { motion } from 'framer-motion';
import { FaEye, FaHands, FaFeatherAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

function Valores() {
  const { copy } = useLanguage();

  const icons = [
    <FaFeatherAlt key="feather" className="text-3xl text-rose-600 mb-3" />,
    <FaHands key="hands" className="text-3xl text-rose-600 mb-3" />,
    <FaEye key="eye" className="text-3xl text-rose-600 mb-3" />,
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
        <h2 className="text-4xl font-bold mb-4">{copy.values.title}</h2>
        <p className="text-lg text-gray-600">{copy.values.intro}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {copy.values.items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            {icons[index]}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Valores;
