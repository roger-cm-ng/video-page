import React from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './checkbox-single-in.scss';
import { guid } from '../../helpers/utils';

const CheckboxSingleIn = ({ checked, callBack, ticket }) => {
  const id = guid();
  const bool = checked === 'true';
  return (
    <div className={`hwrld ${css.hwrld}`}>
      <div className={`checkbox ${css.checkbox}`}>
        <input
          type="checkbox"
          checked={bool}
        />
        <label
          onClick={() => callBack(checked, ticket)}
          htmlFor={id}
        >
        </label>
      </div>
    </div>
  );
};

CheckboxSingleIn.propTypes = {
  checked: React.PropTypes.string,
  callBack: React.PropTypes.func,
  ticket: React.PropTypes.string
};

export default styleable(css)(CheckboxSingleIn);
