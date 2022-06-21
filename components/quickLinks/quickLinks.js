import React, { Fragment, useState } from 'react';
import classes from './quickLinks.module.scss';
import * as Scroll from 'react-scroll';
import { IoIosArrowDown } from 'react-icons/io';
import IT from 'country-flag-icons/react/3x2/IT';
import GB from 'country-flag-icons/react/3x2/GB';
import { useTranslation } from 'react-i18next';
import Dropdown from '../dropdown/dropdown';

// Link
var Link = Scroll.Link;

const QuickLinks = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { t, i18n } = useTranslation();

  // close dropdown
  const closeDropdownHandler = () => {
    setShowDropdown(false);
  };

  return (
    <Fragment>
      <h6 className={classes.QuickLinks__heading}>Link veloci</h6>
      <ul className={classes.QuickLinks__list}>
        <li className={classes.QuickLinks__item}>
          <Link to='Home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className={classes.QuickLinks__item}>
          <Link to='Su di me' smooth={true} duration={500}>
            {t('SuDiMe')}
          </Link>
        </li>
        <li className={classes.QuickLinks__item}>
          <Link to='Progetti' smooth={true} duration={500}>
            {t('Progetti')}
          </Link>
        </li>
        <li className={classes.QuickLinks__item}>
          <div
            className={classes.QuickLinks__language}
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            {i18n.language === 'it' && (
              <IT className={classes.QuickLinks__flag} />
            )}
            {i18n.language === 'en' && (
              <GB className={classes.QuickLinks__flag} />
            )}
            <p className={classes.QuickLinks__text}>
              {i18n.language === 'it' ? 'Italiano' : 'English'}
            </p>
            <span className={classes.QuickLinks__boxIcon}>
              <IoIosArrowDown className={classes.QuickLinks__icon} />
            </span>
          </div>
          {showDropdown && <Dropdown onClose={closeDropdownHandler} />}
        </li>
      </ul>
    </Fragment>
  );
};

export default QuickLinks;
