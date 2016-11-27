import React from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './header.scss';

const Header = () => (
  <div className={`hwrld ${css.hwrld}`}>

  </div>
);

Header.propTypes = {};

export default styleable(css)(Header);