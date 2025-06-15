import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/glitch.css';
import logo from './assets/logo-candela.svg';

const letras = ['C', 'A', 'N', 'D', 'E', 'L', 'A'];

function Intro({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const logoDelay = setTimeout(() => setShowLogo(true), 2400);

    const hideDelay = setTimeout(() => {
      console.log("✅ Intro terminada, ejecutando onFinish()");
      setIsVisible(false);
      if (typeof onFinish === "function") {
        onFinish();
      }
    }, 4000);

    return () => {
      clearTimeout(logoDelay);
      clearTimeout(hideDelay);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 glitch-bg flex flex-col items-center justify-center z-50 bg-black"
        >
          <motion.div className="flex space-x-2 text-white text-5xl font-extrabold tracking-widest mb-4">
            {letras.map((letra, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                {letra}
              </motion.span>
            ))}
          </motion.div>

          {showLogo && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: 1 }}
              transition={{ duration: 1 }}
            >
             <img
                src={logo}
                alt="Logo Candela"
                className="w-20 h-20"
                style={{ filter: 'invert(1)' }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Intro;
