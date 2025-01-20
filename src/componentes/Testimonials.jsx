import React from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import img1 from '../imagenes/Testimonials/img1.jpg';
import img2 from '../imagenes/Testimonials/img2.jpg';
import img3 from '../imagenes/Testimonials/img3.jpg';
import img4 from '../imagenes/Testimonials/img4.jpg';
import img5 from '../imagenes/Testimonials/img5.jpg';
import '../hojas-estilo-estilos/Testimonials.css';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Sophia Johnson',
      src: img1,
      text: t('testimonial1'),
    },
    {
      name: 'Ethan Brown',
      src: img2,
      text: t('testimonial2'),
    },
    {
      name: 'Mia Davis',
      src: img3,
      text: t('testimonial3'),
    },
    {
      name: 'Liam Wilson',
      src: img4,
      text: t('testimonial4'),
    },
    {
      name: 'Olivia Martinez',
      src: img5,
      text: t('testimonial5'),
    },
  ];

  return (
    <div className="testimonials-container">
      <h1 className="testimonials-title">{t('testimonials')}</h1>
      <p className="testimonials-description">{t('testimonialsDescription')}</p>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <LazyLoadImage
              src={testimonial.src}
              alt={testimonial.name}
              effect="blur" // Aplica un efecto de desenfoque al cargar
              className="testimonial-image"
            />
            <div className="testimonial-content">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
