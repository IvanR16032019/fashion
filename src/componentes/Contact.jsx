import React from "react";
import { useTranslation } from "react-i18next";
import img1 from '../imagenes/Contact/Img1.jpg'
import img2 from '../imagenes/Contact/img2.jpg'
import "../hojas-estilo-estilos/Contact.css";

const Contact = () => {
  const { t } = useTranslation();

  // Datos de contacto
  const phone = "+1 234 567 890";
  const email = "contacto@fashion-skin.com";
  const location = "Avenida Principal, 123, Ciudad Imaginaria, País Ejemplo";

  return (
    <div className="contact-container">
      <h1 className="contact-title">{t("contact")}</h1>
      <p className="contact-description">{t("contactDescription")}</p>

      <div className="contact-info">
        <div className="contact-item">
          <h3>{t("phone")}</h3>
          <p>{phone}</p>
        </div>
        <div className="contact-item">
          <h3>{t("email")}</h3>
          <p>{email}</p>
        </div>
        <div className="contact-item">
          <h3>{t("location")}</h3>
          <p>{location}</p>
        </div>
      </div>

      {<div className="contact-images">
        <img
          src={img1}
          alt={t("contactImageAlt1")}
          className="contact-image"
        />
        <img
          src={img2}
          alt={t("contactImageAlt2")}
          className="contact-image"
        />
      </div>}
    </div>
  );
};

export default Contact;
