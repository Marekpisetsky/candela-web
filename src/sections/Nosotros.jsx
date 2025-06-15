import { motion } from 'framer-motion';

function Nosotros() {
  return (
    <section id="nosotros" className="scroll-mt-24 bg-white py-20 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quiénes somos?</h2>
          <p className="text-lg text-gray-700 mb-4">
            En <span className="text-rose-600 font-semibold">Candela</span>, creemos en la energía que inspira.  
            Somos un equipo comprometido con la sostenibilidad, la eficiencia y el bienestar colectivo.
          </p>
          <p className="text-gray-600">
            Nuestro enfoque se basa en la transparencia, el impacto positivo y la tecnología al servicio de las personas.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1505480449763-1f2d557d7f79?fit=crop&w=800&q=80"
            alt="Equipo de trabajo"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Nosotros;
