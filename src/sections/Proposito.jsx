import { motion } from 'framer-motion';
import { FaLeaf, FaLightbulb, FaHandsHelping } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

function Proposito() {
  const { copy } = useLanguage();

  const icons = [
    <FaLeaf key="leaf" className="text-3xl text-rose-600 mb-3" />,
    <FaLightbulb key="bulb" className="text-3xl text-rose-600 mb-3" />,
    <FaHandsHelping key="hands" className="text-3xl text-rose-600 mb-3" />,
  ];

  return (
    <motion.section
      id="proposito"
      className="scroll-mt-24 bg-white py-20 px-6 text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">{copy.purpose.title}</h2>
        <p className="text-lg text-gray-600">{copy.purpose.intro}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {copy.purpose.items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
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

export default Proposito;
