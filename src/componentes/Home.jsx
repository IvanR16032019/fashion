import React from 'react';
//import Navbar from '../Navbar'; // Ajusta la ruta si el archivo Navbar está en otra ubicación
import { useTranslation } from 'react-i18next';
//imagenes
import crema from '../imagenes/Home/crema.jpg'
import limpiador from '../imagenes/Home/limpiador.jpg'
import anti from '../imagenes/Home/anti.jpg'
import balsamo from '../imagenes/Home/balsamo.jpg'
import exfoliante from '../imagenes/Home/exfoliante.jpg'
import shampoo from '../imagenes/Home/shampoo.jpg'
import locion from '../imagenes/Home/locion.jpg'
import kit from '../imagenes/Home/kit.jpg'
import bomba from '../imagenes/Home/bomba.jpg'
import mascarilla from '../imagenes/Home/mascarilla.jpg'
import crema_ojos from '../imagenes/Home/crema_ojos.jpg'
import kit_afeitado from '../imagenes/Home/kit_afeitado.jpg'
import perfume from '../imagenes/Home/perfume.jpg'
import acondicionador from '../imagenes/Home/acondicionador.jpg'
import cremaManos from '../imagenes/Home/cremaManos.jpg'
import locionBronceadora from '../imagenes/Home/locionBronceadora.jpg'
import tonicoF from '../imagenes/Home/tonicoF.jpg'
import albornoz from '../imagenes/Home/albornoz.jpg'
import exfoliantePies from '../imagenes/Home/exfoliantePies.jpg'
import mantecaC from '../imagenes/Home/mantecaC.jpg'
import { motion } from 'framer-motion';
import '../hojas-estilo-estilos/Home.css'

const Home = () => {
  const { t } = useTranslation();

  const images = [
    { src: crema, title: t('product1'), description: t('product1Desc') },
    { src: limpiador, title: t('product2'), description: t('product2Desc') },
    { src: anti, title: t('product3'), description: t('product3Desc') },
    { src: balsamo, title: t('product4'), description: t('product4Desc') },
    { src: exfoliante, title: t('product5'), description: t('product5Desc') },
    { src: shampoo, title: t('product6'), description: t('product6Desc') },
    { src: locion, title: t('product7'), description: t('product7Desc') },
    { src: kit, title: t('product8'), description: t('product8Desc') },
    { src: bomba, title: t('product9'), description: t('product9Desc') },
    { src: mascarilla, title: t('product10'), description: t('product10Desc') },
    { src: crema_ojos, title: t('product11'), description: t('product11Desc') },
    { src: kit_afeitado, title: t('product12'), description: t('product12Desc') },
    { src: perfume, title: t('product13'), description: t('product13Desc') },
    { src: acondicionador, title: t('product14'), description: t('product14Desc') },
    { src: cremaManos, title: t('product15'), description: t('product15Desc') },
    { src: locionBronceadora, title: t('product16'), description: t('product16Desc') },
    { src: tonicoF, title: t('product17'), description: t('product17Desc') },
    { src: albornoz, title: t('product18'), description: t('product18Desc') },
    { src: exfoliantePies, title: t('product19'), description: t('product19Desc') },
    { src: mantecaC, title: t('product20'), description: t('product20Desc') },
  ];

  return (
    <div className="home-container">
      
      <section className="hero-section">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('welcomeMessage')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="intro-text"
        >
          {t('introText')}
        </motion.p>
      </section>

      <section className="products-highlight">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('ourProducts')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="products-description"
        >
          {t('productsDescription')}
        </motion.p>
      </section>

      <section className="image-gallery">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('ourGallery')}
        </motion.h2>
        <div className="image-container">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              className="image-item"
            >
              <img src={image.src} alt={image.title} />
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-us">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('aboutUs')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="about-us-description"
        >
          {t('aboutUsDescription')}
        </motion.p>
      </section>

      <section className="testimonials">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t('testimonials')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="testimonial-text"
        >
          "{t('testimonialQuote')}"
        </motion.p>
        <p>- {t('testimonialAuthor')}</p>
      </section>
    </div>
  );
};

export default Home;
