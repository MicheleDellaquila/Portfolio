import React from 'react';
import classes from './heroContent.module.scss';
import { useTranslation } from 'react-i18next';

const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.HeroContent}>
      <div className='container'>
        <div className='center row'>
          <div className='col-md-10 col-lg-6'>
            <h1 className={classes.HeroContent__title}>{t('HeroTitle')}</h1>
            <p className={classes.HeroContent__text}>{t('HeroText')}</p>
            <div className={classes.HeroContent__wrapperBtn}>
              <a
                className={classes.HeroContent__dowloadCv}
                href='/Curriculum.pdf'
                download
              >
                DOWLOAD CV
              </a>
            </div>
          </div>
          <div className='col-md-8 col-lg-6'>
            <img src='./HeroImage.png' alt='Michele Dellaquila web dev' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
