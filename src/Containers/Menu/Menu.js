import React from 'react';
import './Menu.scss';
import Logo from '../../assets/Icon/MD.svg';
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';
import { IoCloseOutline } from 'react-icons/io5';
import { motion } from 'framer-motion/dist/framer-motion';
import MenuAnimation from '../../Animation/MenuAnimation';

// var
let Link = Scroll.Link;

const Menu = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className='Menu'
      variants={MenuAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <header className='Menu__header'>
        <div className='Menu__header-logo'>
          <img className='Menu__logo-image' src={Logo} alt='logo' />
          <h3 className='Menu__logo-title'>Michele Dellaquila</h3>
        </div>
        <div className='Menu__close' onClick={onClose}>
          <IoCloseOutline className='Menu__close-icon' />
        </div>
      </header>
      <nav className='Menu__nav'>
        <ul className='Menu__nav-list'>
          <li className='Menu__list-item'>
            <Link
              className='Menu__item-link'
              onClick={onClose}
              to='Home'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className='Menu__list-item'>
            <Link
              className='Menu__item-link'
              onClick={onClose}
              to={t('Competenze')}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {t('Competenze')}
            </Link>
          </li>
          <li className='Menu__list-item'>
            <Link
              className='Menu__item-link'
              onClick={onClose}
              to={t('Esperienze')}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {t('Esperienze')}
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Menu;
