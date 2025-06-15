import { motion } from 'framer-motion';

const servicios = [
  { titulo: 'Eficiencia energética', descripcion: 'Optimizamos recursos y reducimos tu huella energética.' },
  { titulo: 'Instalaciones solares', descripcion: 'Soluciones limpias y sostenibles para tu empresa o hogar.' },
  { titulo: 'Asesoría técnica', descripcion: 'Te guiamos en cada paso hacia un futuro más brillante.' },
];

function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-gray-100 py-20 px-4 text-gray-900">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-gray-600">
          Ofrecemos soluciones enfocadas en energía, sostenibilidad y claridad.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-rose-600">
              {servicio.titulo}
            </h3>
            <p className="text-gray-700">{servicio.descripcion}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
