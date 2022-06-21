import React, { useState } from 'react';
import classes from './menu.module.scss';
import { MdClose } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import * as Scroll from 'react-scroll';
import Dropdown from '../dropdown/dropdown';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import MenuAnimation from '../../animation/menu';
import Logo from '../../containers/logo/logo';

// Link
var Link = Scroll.Link;

const Menu = ({ onClose }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation();

  // show dropdown
  const showDropdownHandler = () => {
    setShowDropdown((prev) => !prev);
  };

  // close dropdown
  const closeDropdownHandler = () => {
    setShowDropdown(false);
    onClose();
  };

  return (
    <motion.div
      variants={MenuAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      className={classes.Menu}
    >
      <header className={classes.Menu__header}>
        <Logo variant={true} />
        <div className={classes.Menu__boxIcon} onClick={onClose}>
          <MdClose className={classes.Menu__icon} />
        </div>
      </header>
      <div className={classes.Menu__container}>
        <ul className={classes.Menu__list}>
          <li className={classes.Menu__item}>
            <Link to='Hero' smooth={true} duration={500} onClick={onClose}>
              Home
            </Link>
          </li>
          <li className={classes.Menu__item}>
            <Link to='Su di me' smooth={true} duration={500} onClick={onClose}>
              {t('SuDiMe')}
            </Link>
          </li>
          <li className={classes.Menu__item}>
            <Link to='Progetti' smooth={true} duration={500} onClick={onClose}>
              {t('Progetti')}
            </Link>
          </li>
          <li className={classes.Menu__item} onClick={showDropdownHandler}>
            Italiano
            <span className={classes.Menu__boxIcon}>
              <IoIosArrowDown className={classes.Menu__icon} />
            </span>
            {showDropdown && <Dropdown onClose={closeDropdownHandler} />}
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Menu;
