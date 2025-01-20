import React from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../imagenes/About/img1.jpg'
import img2 from '../imagenes/About/img2.jpg'
import img3 from '../imagenes/About/img3.jpg'
import img4 from '../imagenes/About/img4.jpeg'
import img5 from '../imagenes/About/img5.jpg'
import '../hojas-estilo-estilos/About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h1 className="about-title">{t('aboutUs')}</h1>
      <p className="about-description">{t('aboutUsDescription1')}</p>
      <p className="about-description">{t('aboutUsDescription2')}</p>
      <div className="about-images">
        <div className="about-image">
          <img src={img1} alt={t('aboutImageAlt')} />
        </div>
        <div className="about-image">
          <img src={img2} alt={t('aboutImageAlt')} />
        </div>
        <div className="about-image">
          <img src={img3} alt={t('aboutImageAlt')} />
        </div>
        <div className="about-image">
          <img src={img4} alt={t('aboutImageAlt')} />
        </div>
        <div className="about-image">
          <img src={img5} alt={t('aboutImageAlt')} />
        </div>
      </div>
    </div>
  );
};

export default About;
