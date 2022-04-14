import React from 'react';
import './Skills.scss';
import * as Scroll from 'react-scroll';
import { MdOutlineDesignServices } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

// var
let Element = Scroll.Element;

const Skills = () => {
  const { t } = useTranslation();

  return (
    <Element name='skills' className='Skills'>
      <div className='Skills__wrapper'>
        <h1 className='Skills__wrapper-title'>Skills</h1>
      </div>
      <ul className='row'>
        <li className='Skills__col col-xs-12 col-md-6 col-lg-4'>
          <div className='Skills__card'>
            <MdOutlineDesignServices className='Skills__card-icon' />
            <h1 className='Skills__card-title'>Frontend developer</h1>
            <p className='Skills__card-text'>{t('FrontendDeveloper')}</p>
          </div>
        </li>
        <li className='Skills__col col-xs-12 col-md-6 col-lg-4'>
          <div className='Skills__card'>
            <FaReact className='Skills__card-icon' />
            <h1 className='Skills__card-title'>React js developer</h1>
            <p className='Skills__card-text'>{t('ReactDeveloper')}</p>
          </div>
        </li>
        <li className='Skills__col col-xs-12 col-lg-4'>
          <div className='Skills__card'>
            <MdWeb className='Skills__card-icon' />
            <h1 className='Skills__card-title'>Mern developer</h1>
            <p className='Skills__card-text'>{t('MernDeveloper')}</p>
          </div>
        </li>
      </ul>
    </Element>
  );
};

export default Skills;
