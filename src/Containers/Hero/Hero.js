import React from 'react';
import './Hero.scss';
import HeroImage from '../../assets/Image/Hero.jpg';
import Curriculum from '../../assets/Curriculum/Curriculum.pdf';
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';
import { FiDownloadCloud } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

// var
let Element = Scroll.Element;

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Element name='Hero' className='Hero'>
      <section className='Hero__container container'>
        <div className='Hero__row row'>
          <div className='Hero__col col-xs-12 col-lg-5'>
            <div className='Hero__wrapper'>
              <h3 className='Hero__wrapper-subtitle'>
                👋 {t('HeroSubtitle')} <strong className='Hero__subtitle--name'>Michele</strong>
              </h3>
              <h1 className='Hero__wrapper-title'>{t('HeroTitle')}</h1>
              <p className='Hero__wrapper-presentation'>{t('Hero')}</p>
              <a className='Hero__wrapper-curriculum' href={Curriculum} download>
                Dowload cv
                <FiDownloadCloud className='Hero__curriculum-icon' />
              </a>
              <ul className='Hero__socialList'>
                <li className='Hero__socialList-item'>
                  <a
                    className='Hero__item-link'
                    href='https://www.linkedin.com/in/michele-dellaquila-02a82b1b4/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <BsLinkedin />
                  </a>
                </li>
                <li className='Hero__socialList-item'>
                  <a
                    className='Hero__item-link'
                    href='https://www.instagram.com/micheledellaquila03/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <BsInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='Hero__col col-xs-12 col-sm-10 col-md-8 col-lg-7'>
            <img src={HeroImage} alt='Hero' />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
