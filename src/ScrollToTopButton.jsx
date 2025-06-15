import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-rose-600 hover:bg-rose-700 text-white p-3 rounded-full shadow-lg z-50"
          aria-label="Volver arriba"
        >
          ⬆
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;
