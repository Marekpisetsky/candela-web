import { motion } from "framer-motion";

export default function ProductCard({ product, onClick }) {
  return (
    <motion.div
      className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl hover:ring-1 ring-rose-300 transition-all duration-300 ease-out cursor-pointer"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-rose-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500">{product.scent}</p>
        <p className="text-md font-bold text-gray-900 mt-2">{product.price}</p>
      </div>
    </motion.div>
  );
}
