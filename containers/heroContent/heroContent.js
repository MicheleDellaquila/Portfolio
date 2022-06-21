import React from 'react';
import classes from './heroContent.module.scss';
import { useTranslation } from 'react-i18next';

const HeroContent = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.HeroContent}>
      <div className={classes.HeroContent__container}>
        <div className={classes.HeroContent__row}>
          <div className={classes.HeroContent__col}>
            <h1 className={classes.HeroContent__title}>{t('HeroTitle')}</h1>
            <p className={classes.HeroContent__text}>{t('HeroText')}</p>
            <div className={classes.HeroContent__content}>
              <a
                className={classes.HeroContent__dowloadCv}
                href='/static/curriculum.pdf'
                download
              >
                DOWLOAD CV
              </a>
            </div>
          </div>
          <div className={`${classes.HeroContent__col}`}>
            <div className={classes.HeroContent__contentCard}>
              <div className={classes.HeroContent__card}>
                <h4 className={classes.HeroContent__cardTitle}>
                  Key skills ✨
                </h4>
                <div className={classes.HeroContent__cardContainer}>
                  <ul className={classes.HeroContent__cardList}>
                    <li className={classes.HeroContent__cardItem}>React js</li>
                    <li className={classes.HeroContent__cardItem}>Next js</li>
                    <li className={classes.HeroContent__cardItem}>
                      Javascript
                    </li>
                    <li className={classes.HeroContent__cardItem}>
                      Typescript
                    </li>
                    <li className={classes.HeroContent__cardItem}>Mongo db</li>
                    <li className={classes.HeroContent__cardItem}>Html</li>
                    <li className={classes.HeroContent__cardItem}>
                      Frontend developer
                    </li>
                  </ul>
                  <ul className={classes.HeroContent__cardList}>
                    <li className={classes.HeroContent__cardItem}>Mongo db</li>
                    <li className={classes.HeroContent__cardItem}>
                      Express js
                    </li>
                    <li className={classes.HeroContent__cardItem}>Wordpress</li>
                    <li className={classes.HeroContent__cardItem}>Node js</li>
                    <li className={classes.HeroContent__cardItem}>
                      React native
                    </li>
                    <li className={classes.HeroContent__cardItem}>Css</li>
                    <li className={classes.HeroContent__cardItem}>
                      Integrations Api
                    </li>
                  </ul>
                </div>
              </div>
              <div className={classes.HeroContent__cardBackground}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
