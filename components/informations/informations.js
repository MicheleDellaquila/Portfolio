import React, { Fragment } from 'react';
import classes from './informations.module.scss';
import Logo from '../../containers/logo/logo';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Informations = () => {
  const { t } = useTranslation();

  return (
    <Fragment>
      <Logo variant={true} />
      <p className={classes.Informations__text}>{t('FooterText')}</p>
      <div className={classes.Informations__social}>
        <a
          href='https://www.instagram.com/micheledellaquila03/'
          target='_blank'
        >
          <BsInstagram className={classes.Informations__icon} />
        </a>
        <a
          href='https://www.linkedin.com/in/michele-%F0%9F%91%89-frontend-developer-02a82b1b4/'
          target='_blank'
        >
          <BsLinkedin className={classes.Informations__icon} />
        </a>
      </div>
    </Fragment>
  );
};

export default Informations;
