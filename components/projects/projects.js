import React from 'react';
import classes from './projects.module.scss';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Element name='Progetti' className={classes.Projects}>
      <div className='container'>
        <div
          style={{
            justifyContent: 'center',
          }}
          className='row'
        >
          <div className='col-xs-12 col-lg-12'>
            <div className={classes.Projects__card}>
              <div className={classes.Projects__left}>
                <h1 className={classes.Projects__title}>
                  {t('ProgettiTitle')}
                </h1>
                <p className={classes.Projects__text}>{t('ProgettiText')}</p>
                <div className={classes.Projects__wrapperBtn}>
                  <a
                    className={classes.Projects__btn}
                    href='https://github.com/MicheleDellaquila'
                    target='_blank'
                  >
                    {t('PerogettiBtn')}
                  </a>
                </div>
              </div>
              <div className={classes.Projects__right}>
                <img
                  className={classes.Projects__image}
                  src='/static/projects.png'
                  alt='progetti'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
