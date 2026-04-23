import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../componentes/ProductCard';
import ProductModal from '../componentes/ProductModal';
import { useLanguage } from '../context/LanguageContext';

export default function Catalog() {
  const { copy, language } = useLanguage();
  const [selectedScent, setSelectedScent] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scentLabels = copy.catalog.filters;
  const products = copy.catalog.products;

  const uniqueScents = useMemo(
    () => ['all', ...Array.from(new Set(products.map((product) => product.scentKey)))],
    [products]
  );

  const filteredProducts =
    selectedScent === 'all'
      ? products
      : products.filter((product) => product.scentKey === selectedScent);

  const localizedProduct =
    selectedProduct &&
    products.find((product) => product.id === selectedProduct.id);

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
        {copy.catalog.title}
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {uniqueScents.map((scentKey) => (
          <button
            key={`${language}-${scentKey}`}
            type="button"
            onClick={() => setSelectedScent(scentKey)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-200 ${
              selectedScent === scentKey
                ? 'bg-gray-800 text-white border-gray-800'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {scentLabels[scentKey]}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={`${language}-${product.id}`}
            product={{
              ...product,
              scent: scentLabels[product.scentKey],
            }}
            onClick={setSelectedProduct}
          />
        ))}
      </motion.div>

      {localizedProduct && (
        <ProductModal
          product={{
            ...localizedProduct,
            scent: scentLabels[localizedProduct.scentKey],
          }}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </motion.section>
  );
}
