import React from 'react';
import classes from './heroContent.module.scss';
import { useTranslation } from 'react-i18next';

const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.HeroContent}>
      <div className='container'>
        <div className='center row'>
          <div className='col-xs-12 col-sm-10 col-lg-6'>
            <h1 className={classes.HeroContent__title}>{t('HeroTitle')}</h1>
            <p className={classes.HeroContent__text}>{t('HeroText')}</p>
            <div className={classes.HeroContent__wrapperBtn}>
              <a
                className={classes.HeroContent__dowloadCv}
                href='/static/curriculum.pdf'
                download
              >
                DOWLOAD CV
              </a>
            </div>
          </div>
          <div className='col-xs-12 col-sm-10 col-md-10 col-lg-6'>
            <img className={classes.HeroContent__image} src='./static/heroImage.png' alt='Michele Dellaquila web dev' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
