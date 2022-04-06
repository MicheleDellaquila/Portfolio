import React, { Fragment } from 'react';
import './Header.scss';
import Logo from '../../assets/Icon/MD.svg';
import { useTranslation } from 'react-i18next';
import { HiMenu } from 'react-icons/hi';
import Menu from '../Menu/Menu';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Menu />
      <header className='Header container'>
        <div className='Header__logo'>
          <img className='Header__logo-image' src={Logo} alt='logo' />
          <h3 className='Header__logo-title'>Michele Dellaquila</h3>
        </div>
        <nav className='Header__nav'>
          <ul className='Header__nav-list'>
            <li className='Header__list-item'>Home</li>
            <li className='Header__list-item'>{t('SuDiMe')}</li>
            <li className='Header__list-item'>Skill</li>
            <li className='Header__list-item'>{t('Esperienze')}</li>
          </ul>
        </nav>
        <div className='Header__menu'>
          <HiMenu className='Header__menu-icon' />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
