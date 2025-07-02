import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-24 bg-gradient-to-br from-white via-rose-50 to-rose-100 py-20 md:py-32 px-6 text-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texto */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Energía que transforma.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-md">
            En Candela creemos en el poder de lo simple, lo claro y lo
            brillante.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="nosotros"
              smooth={true}
              duration={500}
              offset={-50}
              className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 cursor-pointer"
            >
              Conócenos
            </Link>
          </motion.div>
        </motion.div>

        {/* Imagen o logo */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src="/logo-candela-rosa.png"
            alt="Candela Logo"
            className="w-52 md:w-72 drop-shadow-xl"
          />
        </motion.div>
      </div>
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke="#e11d48"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </section>
  );
}

export default Hero;
