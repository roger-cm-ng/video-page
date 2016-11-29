// touch me
import React from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './radio-in.scss';

const RadioIn = ({ name, callBack, value, reducerValue, ticket }) => {
  let checked = null;
  if (value === reducerValue) {
    checked = true;
  }
  return (
    <div className={`hwrld ${css.hwrld}`}>
      <div className={`radio ${css.radio}`}>
        <input type="radio"
          name={name}
          checked={checked}
          onChange={(evt) => callBack(evt, value, ticket)}
        />
      </div>
    </div>
  );
};

RadioIn.propTypes = {
  name: React.PropTypes.string,
  callBack: React.PropTypes.func,
  value: React.PropTypes.string,
  reducerValue: React.PropTypes.string,
  ticket: React.PropTypes.string
};

export default styleable(css)(RadioIn);
