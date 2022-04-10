import React from 'react';
import './About.scss';
import WebDeveloper from '../../assets/Icon/WebDeveloper.png';
import AppDeveloper from '../../assets/Icon/MobileDeveloper.png';
import Js from '../../assets/Icon/javascript.png';
import FullStackDev from '../../assets/Icon/coding.png';
import * as Scroll from 'react-scroll';
import { useTranslation } from 'react-i18next';

// var
let Element = Scroll.Element;

const About = () => {
  const { t } = useTranslation();

  return <Element name={t('SuDiMe')} className='About'></Element>;
};

export default About;
