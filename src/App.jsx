import { useEffect, useState } from 'react';
import Catalog from './sections/Catalog';
import Proposito from './sections/Proposito';
import Valores from './sections/Valores';
import Vision from './sections/Vision';
import CierreCTA from './sections/CierreCTA';

// Componentes globales
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import ScrollToTopButton from './componentes/ScrollToTopButton';
import Intro from './Intro';

// Secciones de contenido
import Hero from './sections/Hero';
import Servicios from './sections/Servicios';
import Nosotros from './sections/Nosotros';
import Testimonios from './sections/Testimonios';
import Contacto from './sections/Contacto';
import { useLanguage } from './context/LanguageContext';

// Estilos globales
import './styles/glitch.css';
import './index.css';

function App() {
  const [introDone, setIntroDone] = useState(false);
  const { language, copy } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = copy.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', copy.meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', copy.meta.title);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute('content', copy.meta.ogDescription);
    }
  }, [copy.meta.description, copy.meta.ogDescription, copy.meta.title, language]);

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
