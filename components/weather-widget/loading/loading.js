import React from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './loading.scss';

const Loading = () => (
  <div className={`hwrld ${css.hwrld}`}>
    <div className={css.loader}>Loading weather :)</div>
  </div>
);

Loading.propTypes = {};

export default styleable(css)(Loading);
