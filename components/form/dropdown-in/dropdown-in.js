import React from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './dropdown-in.scss';

const DropdownIn = ({ items, selected, callBack, ticket, disabled = false, icon = false }) => {
  const state = disabled ? 'disabled' : '';
  return (
    <div className={`hwrld ${css.hwrld}`}>
      <div className={`dropdown ${css.dropdown}`}>
        {
          icon ? (
            <i className={icon}></i>
          ) : ''
        }
        <select
          value={selected}
          defaultValue={selected}
          className={`${css[state]} ${icon ? css['with-icon'] : ''}`}
          disabled={disabled}
          onChange={(evt) => callBack(ticket, evt.target.value)}
        >
          {items.map((item, ind) => (
            <option key={ind} value={item.val} >{item.lab}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

DropdownIn.propTypes = {
  items: React.PropTypes.array,
  selected: React.PropTypes.string,
  icon: React.PropTypes.string,
  callBack: React.PropTypes.func,
  ticket: React.PropTypes.string,
  disabled: React.PropTypes.bool
};

export default styleable(css)(DropdownIn);
