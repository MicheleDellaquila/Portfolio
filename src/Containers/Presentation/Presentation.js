import React from 'react';
import './Presentation.scss';
import Logo from '../../assets/Icon/MD.svg';
import { motion } from 'framer-motion/dist/framer-motion';
import {
  containerAnimation,
  imageAnimation,
  titleAnimation,
} from '../../Animation/PresentationAnimation';

const Presentation = () => {
  return (
    <motion.div
      variants={containerAnimation}
      initial={false}
      animate={false}
      exit='exit'
      className='Presentation'
    >
      <motion.img
        variants={imageAnimation}
        initial='hidden'
        animate='show'
        className='Presentation__image'
        src={Logo}
        alt='logo'
      />
      <motion.h1
        variants={titleAnimation}
        initial='hidden'
        animate='show'
        className='Presentation__title'
      >
        Michele Dellaquila
      </motion.h1>
    </motion.div>
  );
};

export default Presentation;
