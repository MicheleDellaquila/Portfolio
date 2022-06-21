import React from 'react';
import classes from './about.module.scss';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';

const About = () => {
  const { t } = useTranslation();

  return (
    <Element name='Su di me' className={classes.About}>
      <div className='container'>
        <div
          style={{
            justifyContent: 'space-around',
          }}
          className='row'
        >
          <div className='col-xs-12 col-lg-6'>
            <h1 className={classes.About__title}>{t('AboutTitle')}</h1>

            <p className={classes.About__text}>{t('AboutDesciption')}</p>
            <div className={classes.About__wrapperBtn}>
              <a
                href='mailto:micheledellaquila2003@gmail.com'
                className={classes.About__contact}
              >
                {t('AboutBtn')}
              </a>
            </div>
          </div>
          <div className='col-xs-12 col-lg-5'>
            <figure className={classes.About__cornice}>
              <img
                className={classes.About__image}
                src='/static/about.png'
                alt='about'
              />
            </figure>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
