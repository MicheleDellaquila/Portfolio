import React from 'react';
import classes from './footer.module.scss';
import QuickLinks from '../../components/quickLinks/quickLinks';
import Informations from '../../components/informations/informations';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <div className={classes.Footer__top}>
              <div className={classes.Footer__informations}>
                <Informations />
              </div>
              <div className={classes.Footer__quickLink}>
                <QuickLinks />
              </div>
            </div>
            <div className={classes.Footer__bottom}>
              <p className={classes.Footer__rightsReserved}>
                © ALL RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
