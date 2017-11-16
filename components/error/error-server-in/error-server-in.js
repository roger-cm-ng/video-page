import React from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './error-server-in.scss';

const ErrorServerIn = ({ children }) => (
  <div className={`hwrld ${css.hwrld}`}>
    <div className={css.wrapper}>
      <i className={css.error}></i>
      <div className={css['error-title']} >
        An error has occured
      </div>
      <div className={css['error-text']} >
        {children}
      </div>
    </div>
  </div>
);

ErrorServerIn.propTypes = {
  children: React.PropTypes.array
};

export default styleable(css)(ErrorServerIn);
