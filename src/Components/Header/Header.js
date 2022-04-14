import React, { Fragment, useState, useEffect } from 'react';
import './Header.scss';
import Logo from '../../assets/Icon/Logo.png';
import { useTranslation } from 'react-i18next';
import { HiMenu } from 'react-icons/hi';
import Menu from '../../Containers/Menu/Menu';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import * as Scroll from 'react-scroll';

// Link
var Link = Scroll.Link;

const Header = () => {
  const [activeHeader, setActiveHeader] = useState(false);
  const [menu, setMenu] = useState(false);
  const { t } = useTranslation();

  // chech if header must active or not
  const onScroolHandler = () => {
    if (window.scrollY > 50) {
      setActiveHeader(true);
    } else {
      setActiveHeader(false);
    }
  };

  // effect for detect scroll
  useEffect(() => {
    window.addEventListener('scroll', onScroolHandler);
    return () => window.removeEventListener('scroll', onScroolHandler);
  }, []);

  // menu change
  const menuChangeHandler = () => {
    setMenu((prev) => !prev);
  };

  return (
    <Fragment>
      <AnimatePresence>{menu && <Menu onClose={menuChangeHandler} />}</AnimatePresence>
      <header className={`Header ${activeHeader ? 'Header--active' : ''}`}>
        <div className='Header__wrapper'>
          <div className='Header__logo'>
            <img className='Header__logo-image' src={Logo} alt='logo' />
          </div>
          <nav className='Header__nav'>
            <ul className='Header__nav-list'>
              <Link to='Hero' spy={true} smooth={true} duration={500} className='Header__list-item'>
                Home
              </Link>
              <Link
                to={t('SuDiMe')}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className='Header__list-item'
              >
                {t('SuDiMe')}
              </Link>
              <Link
                to='Skill'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className='Header__list-item'
              >
                Skill
              </Link>
              <Link
                to={t('Esperienze')}
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                className='Header__list-item'
              >
                {t('Esperienze')}
              </Link>
            </ul>
          </nav>
          <div className='Header__menu' onClick={menuChangeHandler}>
            <HiMenu className='Header__menu-icon' />
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
