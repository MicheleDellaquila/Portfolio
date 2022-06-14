import React from 'react';
import classes from './hero.module.scss';
import HeroHeader from '../../components/header/header';
import HeroContent from '../heroContent/heroContent';
import { Element } from 'react-scroll';

const Hero = () => {
  return (
    <Element name="Hero" className={classes.Hero}>
      <HeroHeader />
      <HeroContent />
    </Element>
  );
};

export default Hero;
