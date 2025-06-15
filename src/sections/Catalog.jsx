import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../componentes/ProductCard";
import ProductModal from "../componentes/ProductModal";
import { products } from "../data/products";

export default function Catalog() {
  const [selectedScent, setSelectedScent] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const uniqueScents = [
    "Todos",
    ...Array.from(new Set(products.map((p) => p.scent)))
  ];

  const filteredProducts =
    selectedScent === "Todos"
      ? products
      : products.filter((p) => p.scent === selectedScent);

  return (
    <motion.section
      className="py-16 px-4 md:px-10 bg-[#fdfcf9]"
      id="catalog"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Nuestro Catálogo
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {uniqueScents.map((scent) => (
          <button
            key={scent}
            onClick={() => setSelectedScent(scent)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200
              ${selectedScent === scent
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"}`}
          >
            {scent}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-[90%] sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto overflow-x-auto sm:overflow-visible"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={setSelectedProduct}
          />
        ))}
      </motion.div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </motion.section>
  );
}
