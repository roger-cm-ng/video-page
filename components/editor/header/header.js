import React from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './header.scss';

const Header = () => (
  <div className={`hwrld ${css.hwrld}`}>
    <a href="http://www.fairfaxmedia.com.au/" target="_blank">
      <img src="/images/bitmaps/fairfax-logo-whitebg.png" />
    </a>
  </div>
);

Header.propTypes = {};

export default styleable(css)(Header);
