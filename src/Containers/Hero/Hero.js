import React, { useState } from 'react';
import './Hero.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../../assets/Icon/MD.svg';
import HeroImage from '../../assets/Image/Hero.jpg';
import HeroImage1 from '../../assets/Image/Hero1.jpg';
import Curriculum from '../../assets/Curriculum/Curriculum.pdf';
import Menu from '../Menu/Menu';
import { CSSTransition } from 'react-transition-group';
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

// var
let Element = Scroll.Element;

const Hero = () => {
  const [statusMenu, setStatusMenu] = useState(false);
  const { t } = useTranslation();

  // status menu
  const statusMenuHandler = () => {
    setStatusMenu((prev) => !prev);
  };

  // close menu
  const closeMenuHandler = () => {
    setStatusMenu((prev) => !prev);
  };

  return (
    <Element name='Hero' className='Hero'>
      <section className='Hero__container container'>
        <div className='Hero__row row'>
          <div className='Hero__col col-xs-5'>
            <div className='Hero__wrapper'>
              <h3 className='Hero__wrapper-subtitle'>
                👋 Ciao , Mi chiamo <strong className='Hero__subtitle--name'>Michele</strong>
              </h3>
              <h1 className='Hero__wrapper-title'>Sono un sviluppatore Web</h1>
              <p className='Hero__wrapper-presentation'>{t('Presentazione')}</p>
              <a className='Hero__wrapper-curriculum' href={Curriculum} download>
                Dowload cv
                <FileDownloadIcon className='Hero__curriculum-icon' />
              </a>
              <ul className='Hero__socialList'>
                <li className='Hero__socialList-item'>
                  <Link>
                    <LinkedInIcon />
                  </Link>
                </li>
                <li className='Hero__socialList-item'>
                  <Link>
                    <InstagramIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='Hero__col col-xs-7'>
            <img src={HeroImage1} alt='Hero' />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Hero;
