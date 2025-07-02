import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function ProductModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {product.name}
        </h2>
        <p className="text-sm text-gray-600 mb-2">{product.scent}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-lg font-bold text-gray-900">{product.price}</p>
      </motion.div>
    </div>
  );
}

ProductModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    scent: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
