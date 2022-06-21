import React from 'react';
import classes from './header.module.scss';
import Logo from '../logo/logo';
import Navigation from '../../components/navigation/navigation';

const Header = () => {
  return (
    <div className={classes.Header}>
      <header className='container'>
        <div className={classes.row}>
          <div className={classes.col}>
            <Logo />
          </div>
          <div className={classes.col}>
            <Navigation />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
