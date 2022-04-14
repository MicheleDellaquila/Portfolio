import React from 'react';
import './About.scss';
import * as Scroll from 'react-scroll';
import { useTranslation } from 'react-i18next';
import AboutMe from '../../assets/Image/About.jpg';
import { FiSend } from 'react-icons/fi';

// var
let Element = Scroll.Element;

const About = () => {
  const { t } = useTranslation();

  return (
    <Element name={t('SuDiMe')} className='About'>
      <section className='About__container'>
        <div className='About__row row'>
          <div className='About__col col-xs-12 col-sm-8 col-md-6 col-lg-5'>
            <img className='About__image' src={AboutMe} alt='about me' />
          </div>
          <div className='About__col col-xs-12 col-sm-12 col-md-5'>
            <div className='About__wrapper'>
              <h3 className='About__wrapper-topTitle'>{t('SuDiMe')}</h3>
              <h1 className='About__wrapper-title'>{t('AboutTopTitle')}</h1>
              <h2 className='About__wrapper-subtitle'>{t('AboutSubtitle')}</h2>
              <p className='About__wrapper-text'>{t('AboutText')}</p>
              <a href='mailto:micheledellaquila2003@email.com' className='About__wrapper-btn'>
                {t('AboutBtn')}
                <FiSend className='About__btn-icon' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default About;
