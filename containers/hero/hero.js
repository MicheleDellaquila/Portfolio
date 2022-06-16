import React from 'react';
import classes from './hero.module.scss';
import Header from '../header/header';
import HeroContent from '../heroContent/heroContent';
import { Element } from 'react-scroll';

const Hero = () => {
  return (
    <Element name="Hero" className={classes.Hero}>
      <Header />
      <HeroContent />
    </Element>
  );
};

export default Hero;
