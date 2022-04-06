import React from 'react';
import './Menu.scss';
import Logo from '../../assets/Icon/MD.svg';
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';
import { GrClose } from 'react-icons/gr';

// var
let Link = Scroll.Link;

const Menu = ({ onCloseMenu }) => {
  const { t } = useTranslation();

  return (
    <div className='Menu'>
      <header className='Menu__header'>
        <div className='Menu__header-logo'>
          <img className='Menu__logo-image' src={Logo} alt='logo' />
          <h3 className='Menu__logo-title'>Michele Dellaquila</h3>
        </div>
        <div className='Menu__close'>
          <GrClose className='Menu__close-icon' />
        </div>
      </header>
      <nav className='Menu__nav'>
        <ul className='Menu__nav-list'>
          <li className='Menu__list-item'>
            <Link
              className='Menu__item-link'
              onClick={() => onCloseMenu()}
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
              onClick={() => onCloseMenu()}
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
              onClick={() => onCloseMenu()}
              to={t('Esperienze')}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {t('Esperienze')}
            </Link>
          </li>
          <li className='Menu__list-item'>
            <Link
              className='Menu__item-link'
              onClick={() => onCloseMenu()}
              to={t('Progetti')}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              {t('Progetti')}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
