import React from 'react';
import classes from './projects.module.scss';
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element name='Progetti' className={classes.Projects}>
      <div className='container'>
        <div
          style={{
            justifyContent: 'center',
          }}
          className='row'
        >
          <div className='col-xs-12 col-lg-10'>
            <div className={classes.Projects__card}>
              <div className={classes.Projects__left}>
                <h1 className={classes.Projects__title}>I miei progetti ?</h1>
                <p className={classes.Projects__text}>
                  In questi tre anni ho svolto diversi progetti per vare
                  industrie , negozie locali e tanto altro.Visiona i miei
                  progetti tramite il mio profilo git hub per apprendere le mie
                  skill e le metodologie attuate.
                </p>
                <div className={classes.Projects__wrapperBtn}>
                  <a
                    className={classes.Projects__btn}
                    href='https://github.com/MicheleDellaquila'
                    target='_blank'
                  >
                    I miei progetti
                  </a>
                </div>
              </div>
              <div className={classes.Projects__right}>
                <img
                  className={classes.Projects__image}
                  src='/projects.png'
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
