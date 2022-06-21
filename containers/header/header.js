import React from 'react';
import classes from './header.module.scss';
import Logo from '../logo/logo';
import Navigation from '../../components/navigation/navigation';

const Header = () => {
  return (
    <div className={classes.Header}>
      <header className={classes.Header__container}>
        <div className={classes.Header__row}>
          <Logo />
          <Navigation />
        </div>
      </header>
    </div>
  );
};

export default Header;
