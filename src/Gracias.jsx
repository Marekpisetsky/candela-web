import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react'; // asegúrate de tener lucide-react instalado

function Gracias({ onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white shadow-lg p-8 rounded-xl text-center max-w-md mx-auto"
      >
        <CheckCircle className="w-16 h-16 text-rose-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-rose-600 mb-2">¡Gracias!</h2>
        <p className="text-gray-700 mb-6">
          Hemos recibido tu mensaje. Te responderemos pronto.
        </p>
        <button
          onClick={onClose}
          className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition"
        >
          Volver al sitio
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Gracias;
