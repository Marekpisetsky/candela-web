import { motion } from 'framer-motion';
import { useState } from 'react';
import Gracias from './Gracias';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mvgrrqzb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setEnviado(true);
      setFormData({ nombre: '', email: '', mensaje: '' });
    } else {
      alert("Hubo un error ❌, intenta más tarde.");
    }
  };

  return (
    <>
      {enviado && <Gracias onClose={() => setEnviado(false)} />}

      <section id="contacto" className="scroll-mt-24 bg-gray-100 py-20 px-6 text-gray-900">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Hablemos</h2>
          <p className="text-lg text-gray-600">
            ¿Tienes un proyecto o pregunta? Envíanos un mensaje.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje..."
            rows="5"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <button
            type="submit"
            className="bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
          >
            Enviar mensaje
          </button>
        </motion.form>
      </section>
    </>
  );
}

export default Contacto;
