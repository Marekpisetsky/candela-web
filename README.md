# 🔥 Candela

**Candela** es una experiencia web elegante e inspiradora para una marca de velas artesanales con propósito.  
Diseñado con enfoque en sostenibilidad y claridad visual.

---

## ✨ Demo en vivo

🔗 [Ver sitio desplegado](https://candela-web-studio.vercel.app/)

---

## 🚀 Características

- Intro animada al cargar
- Diseño dividido y responsivo
- Catálogo interactivo con filtros
- Testimonios animados con cambio automático
- Formulario funcional con Formspree
- Scroll suave y preciso
- Favicon + Manifest.json listo para PWA

---

## 🛠 Tecnologías utilizadas

- React + Vite
- Tailwind CSS
- Framer Motion
- React Scroll
- Formspree
- SVG Pattern Backgrounds

---

## ⚙️ Cómo ejecutar localmente

```bash
git clone https://github.com/Marekpisetsky/candela-web.git
cd candela-web
npm install
npm run dev
```

### Variables de entorno

Utiliza el archivo de ejemplo `.env.example`. Cópialo como `.env` y reemplaza el valor con la URL de tu formulario de Formspree:

```bash
cp .env.example .env
# Edita .env y asigna tu URL real
VITE_FORMSPREE_URL=https://formspree.io/tu-endpoint
```


### Despliegue

Ejecuta `npm run build` para obtener los archivos optimizados en la carpeta `dist`. Luego sirve esa carpeta con tu plataforma de hosting estático favorita.

## 📄 Licencia

Este proyecto esta bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para mas informacion.

## ✅ Cambios críticos

- `src/componentes/ScrollToTopButton.jsx` ya utiliza la extensión `.jsx` correcta y no requiere ser renombrado.
