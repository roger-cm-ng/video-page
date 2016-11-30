import React from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './no-data.scss';

const NoData = () => (
  <div className={`hwrld ${css.hwrld}`}>
    <div className={css.err}>Error connecting :(</div>
    <div className={css.wombat}>But if I'm a wombat and I'm a wombat, am I a wombat?</div>
  </div>
);

NoData.propTypes = {};

export default styleable(css)(NoData);
