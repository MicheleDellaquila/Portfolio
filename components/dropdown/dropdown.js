import React from 'react';
import classes from './dropdown.module.scss';
import GB from 'country-flag-icons/react/3x2/GB';
import IT from 'country-flag-icons/react/3x2/IT';
import { useTranslation } from 'react-i18next';

const Dropdown = ({ onClose }) => {
  const { i18n } = useTranslation();

  // change language
  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'it' ? 'en' : 'it');
    onClose();
  };

  return (
    <div className={classes.Dropdown}>
      <div
        className={classes.Dropdown__content}
        onClick={changeLanguageHandler}
      >
        {i18n.language === 'en' && <IT className={classes.Dropdown__flag} />}
        {i18n.language === 'it' && <GB className={classes.Dropdown__flag} />}
        {i18n.language === 'en' && (
          <p className={classes.Dropdown__text}>Italian</p>
        )}
        {i18n.language === 'it' && (
          <p className={classes.Dropdown__text}>Inglese</p>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
