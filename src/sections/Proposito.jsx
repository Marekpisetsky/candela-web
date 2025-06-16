import { motion } from 'framer-motion';
import { FaLeaf, FaLightbulb, FaHandsHelping } from 'react-icons/fa';

function Proposito() {
  const pilares = [
    {
      icono: <FaLeaf className="text-3xl text-rose-600 mb-3" />,
      titulo: "Sostenibilidad",
      texto: "Creamos soluciones con impacto positivo y duradero en el planeta."
    },
    {
      icono: <FaLightbulb className="text-3xl text-rose-600 mb-3" />,
      titulo: "Inspiración",
      texto: "Diseñamos experiencias que conectan con emociones auténticas."
    },
    {
      icono: <FaHandsHelping className="text-3xl text-rose-600 mb-3" />,
      titulo: "Comunidad",
      texto: "Creemos en crecer junto a quienes confían en nosotros."
    }
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
        <h2 className="text-4xl font-bold mb-4">Nuestro Propósito</h2>
        <p className="text-lg text-gray-600">
          Lo que guía cada vela que encendemos, cada idea que iluminamos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {pilares.map((pilar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            {pilar.icono}
            <h3 className="text-xl font-semibold mb-2">{pilar.titulo}</h3>
            <p className="text-gray-700">{pilar.texto}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Proposito;
