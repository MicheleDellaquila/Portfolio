import React, { Fragment, useState } from 'react';
import classes from './hamburgerMenu.module.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import Menu from '../../components/menu/menu';
import { AnimatePresence } from 'framer-motion';

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  // close menu
  const closeMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <Fragment>
      <div className={classes.HamburgerMenu} onClick={() => setShowMenu(true)}>
        <GiHamburgerMenu className={classes.HamburgerMenu__icon} />
      </div>
      <AnimatePresence>
        {showMenu && <Menu onClose={closeMenuHandler} />}
      </AnimatePresence>
    </Fragment>
  );
};

export default HamburgerMenu;
