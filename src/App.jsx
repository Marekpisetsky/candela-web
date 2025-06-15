import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Servicios from './Servicios';
import Nosotros from './Nosotros';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import Intro from './Intro';
import Testimonios from './Testimonios';
import Contacto from './Contacto';

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

          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </>
  );
}

export default App;
