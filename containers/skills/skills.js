import React from 'react';
import classes from './skills.module.scss';
import { Element } from 'react-scroll';
import { MdWeb } from 'react-icons/md';
import { FiDatabase } from 'react-icons/fi';
import { GrReactjs } from 'react-icons/gr';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Element name='Skill' className={classes.Skills}>
      <div className='container'>
        <div className="center row">
          <div className='col-xs-12 col-sm-6 col-lg-4'>
            <div className={classes.Skills__container}>
              <figure className={classes.Skills__boxIcon}>
                <MdWeb className={classes.Skills__icon} />
              </figure>
              <div>
                <h5 className={classes.Skills__title}>Frontend developer</h5>
                <p className={classes.Skills__text}>{t('Skills1')}</p>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-lg-4'>
            <div className={classes.Skills__container}>
              <figure className={classes.Skills__boxIcon}>
                <FiDatabase className={classes.Skills__icon} />
              </figure>
              <div>
                <h5 className={classes.Skills__title}>Mern pattern</h5>
                <p className={classes.Skills__text}>{t('Skills2')}</p>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-lg-4'>
            <div className={classes.Skills__container}>
              <figure className={classes.Skills__boxIcon}>
                <GrReactjs className={classes.Skills__icon} />
              </figure>
              <div>
                <h5 className={classes.Skills__title}>React js Developer</h5>
                <p className={classes.Skills__text}>{t('Skills3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Skills;
