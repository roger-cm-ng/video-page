import React from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './no-data.scss';

const NoData = () => (
  <div className={`hwrld ${css.hwrld}`}>
    <h1>No data</h1>
  </div>
);

NoData.propTypes = {};

export default styleable(css)(NoData);
