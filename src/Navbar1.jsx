// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import './hojas-estilo-estilos/Navbar1.css'

// const Navbar1 = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t, i18n } = useTranslation();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <nav className={`navbar1 ${isOpen ? 'open' : ''}`}>
//       <button className="navbar-toggler" onClick={toggleMenu}>
//         &#9776; {/* Icono de hamburguesa (3 rayitas) */}
//       </button>
//       <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
//         <ul>
//           <li><Link to="/about">{t('aboutUs')}</Link></li>
//           <li><Link to="/testimonials">{t('testimonials')}</Link></li>
//           <li><Link to="/contact">{t('contact')}</Link></li>
//         </ul>
//         <div className="language-switcher">
//           <button onClick={() => changeLanguage('en')}>English</button>
//           <button onClick={() => changeLanguage('es')}>Español</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar1;
