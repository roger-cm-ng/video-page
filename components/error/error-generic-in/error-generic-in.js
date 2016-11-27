import React from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './error-generic-in.scss';

const ErrorGenericIn = ({ validation }) => (
  <div className={`hwrld ${css.hwrld}`}>
    <div className={css.txt}>
      {validation.errorMsg}
    </div>
  </div>
);

ErrorGenericIn.propTypes = {
  validation: React.PropTypes.object
};

export default styleable(css)(ErrorGenericIn);
