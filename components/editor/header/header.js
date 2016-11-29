import React from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './header.scss';

const Header = () => (
  <div className={`hwrld ${css.hwrld}`}>
    <h1>Fairfax media</h1>
  </div>
);

Header.propTypes = {};

export default styleable(css)(Header);
