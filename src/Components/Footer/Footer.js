import React from 'react';
import Logo from '../../assets/Icon/Logo.png';
import './Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  // change language
  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
    const rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='Footer'>
      <div className='Footer__over'>
        <img className='Footer__over-logo' src={Logo} alt='logo' />
        <div className='Footer__languages'>
          <div className='Footer__languages-ita' onClick={() => changeLanguageHandler('it')}>
            <p>{t('FooterIta')}</p>
          </div>
          <div className='Footer__languages-eng' onClick={() => changeLanguageHandler('en')}>
            <p>{t('FooterEng')}</p>
          </div>
        </div>
      </div>
      <div className='Footer__under'>
        <p className='Footer__under-text'>© ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
