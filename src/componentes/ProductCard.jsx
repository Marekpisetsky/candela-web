import { motion } from "framer-motion";

export default function ProductCard({ product, onClick }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-150 hover:scale-[1.03] cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover md:h-56 sm:h-52 h-48"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.scent}</p>
        <p className="text-md font-bold text-gray-900 mt-2">{product.price}</p>
      </div>
    </motion.div>
  );
}