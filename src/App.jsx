import { useState } from 'react';
import Catalog from "./sections/Catalog";
import Proposito from "./sections/Proposito";
import Valores from "./sections/Valores";
import Vision from "./sections/Vision";
import CierreCTA from "./sections/CierreCTA";

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
          <Proposito />
          <Valores />
          <Vision />
          <Testimonios />
          <Catalog />
          <Contacto />
          <CierreCTA />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}

export default App;
