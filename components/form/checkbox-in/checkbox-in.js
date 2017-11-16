import React from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './checkbox-in.scss';
import { guid } from '../../helpers/utils';

const CheckboxIn = ({ checked, onCheck, ind, ticket }) => {
  const id = guid();
  return (
    <div className={`hwrld ${css.hwrld}`}>
      <div className={`checkbox ${css.checkbox}`}>
        <input
          type="checkbox"
          id={id} checked={checked}
          onChange={(evt) => onCheck(ind, evt, checked, ticket)}
        />
        <label htmlFor={id}></label>
      </div>
    </div>
  );
};

CheckboxIn.propTypes = {
  checked: React.PropTypes.boolean,
  onCheck: React.PropTypes.func,
  ind: React.PropTypes.number,
  ticket: React.PropTypes.string
};

export default styleable(css)(CheckboxIn);
