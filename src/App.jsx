import { useState } from 'react';
import Catalog from "./sections/Catalog";

// Componentes globales
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import ScrollToTopButton from "./componentes/ScrollToTopButton";
import Intro from "./Intro";

// Secciones de contenido
import Hero from "./sections/Hero";
import Servicios from "./sections/Servicios";
import Nosotros from "./sections/Nosotros";
import Testimonios from "./sections/Testimonios";
import Contacto from "./sections/Contacto";


// Estilos globales
import "./styles/glitch.css";
import "./index.css";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <Navbar />
          <Hero />
          <Servicios />
          <Nosotros />
          <Testimonios />
          <Contacto />

          <main className="flex items-center justify-center h-[60vh] bg-rose-600 text-white">
            <h1 className="text-4xl font-bold">¡Candela está viva! 🔥</h1>
          </main>

          <Catalog />

          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}

export default App;
