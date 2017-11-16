import React from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './error-secondary.scss';

const ErrorSecondary = ({ validation }) => (
  <div className={`hwrld ${css.hwrld}`}>
    <div className={css.txt}>
      {validation.errorMsg}
    </div>
  </div>
);

ErrorSecondary.propTypes = {
  validation: React.PropTypes.object
};

export default styleable(css)(ErrorSecondary);
