import React from 'react';
import classes from './logo.module.scss';

const Logo = ({ variant }) => {
  const className = variant ? classes.Logo__variant : classes.Logo;
  return <h6 className={className}>MICHELE DELLAQUILA</h6>;
};

export default Logo;
