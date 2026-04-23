import { motion } from 'framer-motion';
import { useState } from 'react';
import Gracias from '../componentes/Gracias';
import { useLanguage } from '../context/LanguageContext';

function Contacto() {
  const { copy } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setEnviado(true);
      setFormData({ nombre: '', email: '', mensaje: '' });
      return;
    }

    alert(copy.contact.error);
  };

  return (
    <>
      {enviado && <Gracias onClose={() => setEnviado(false)} />}
      <section
        id="contacto"
        className="scroll-mt-24 bg-white py-16 md:py-24 px-6 text-gray-900"
      >
        <div className="max-w-6xl mx-auto flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-12 md:items-start">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">{copy.contact.title}</h2>
            <p className="text-lg text-gray-600">{copy.contact.intro}</p>
            <p className="mt-4 text-sm text-gray-400">{copy.contact.responseTime}</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl shadow-md space-y-6 border border-gray-200"
          >
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder={copy.contact.placeholders.name}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={copy.contact.placeholders.email}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder={copy.contact.placeholders.message}
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <button
              type="submit"
              className="w-full text-center md:w-auto bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              {copy.contact.submit}
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}

export default Contacto;
