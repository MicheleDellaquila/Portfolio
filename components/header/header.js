import React from 'react';
import classes from './header.module.scss';
import Logo from '../../containers/logo/logo';
import Navigation from '../../containers/navigation/navigation';

const Header = () => {
  return (
    <div className={classes.Header}>
      <header className='container'>
        <div className={classes.row}>
          <Logo />
          <Navigation />
        </div>
      </header>
    </div>
  );
};

export default Header;
