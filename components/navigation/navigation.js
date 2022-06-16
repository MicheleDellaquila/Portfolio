import React, { useState } from 'react';
import classes from './navigation.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import IT from 'country-flag-icons/react/3x2/IT';
import GB from 'country-flag-icons/react/3x2/GB';
import Dropdown from '../dropdown/dropdown';
import { useTranslation } from 'react-i18next';
import * as Scroll from 'react-scroll';
import HamburgerMenu from '../../containers/hamburgerMenu/hamburgerMenu';

// Link
var Link = Scroll.Link;

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { t, i18n } = useTranslation();

  // close dropdown
  const closeDropdownHandler = () => {
    setShowDropdown(false);
  };

  return (
    <nav className={classes.Navigation}>
      <ul className={classes.Navigation__list}>
        <li className={classes.Navigation__item}>
          <Link to='Hero' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className={classes.Navigation__item}>
          <Link to='Skill' smooth={true} duration={500}>
            Skill
          </Link>
        </li>
        <li className={classes.Navigation__item}>
          <Link to='Su di me' smooth={true} duration={500}>
            {t('SuDiMe')}
          </Link>
        </li>
        <li className={classes.Navigation__item}>
          <Link to='Progetti' smooth={true} duration={500}>
            {t('Progetti')}
          </Link>
        </li>
        <li className={classes.Navigation__item}>
          <div
            className={classes.Navigation__language}
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {i18n.language === 'it' && (
              <IT className={classes.Navigation__flag} />
            )}
            {i18n.language === 'en' && (
              <GB className={classes.Navigation__flag} />
            )}
            <p className={classes.Navigation__text}>
              {i18n.language === 'it' ? 'Italiano' : 'English'}
            </p>
            <span className={classes.Navigation__boxIcon}>
              <IoIosArrowDown className={classes.Navigation__icon} />
            </span>
          </div>
          {showDropdown && <Dropdown onClose={closeDropdownHandler} />}
        </li>
      </ul>
      <HamburgerMenu />
    </nav>
  );
};

export default Navigation;
