import React from 'react';
import styleable from 'react-styleable';
import PropTypes from 'prop-types';
import '../../styles/core.scss';
import css from './build-number.scss';

const BuildNumber = ({ str = 'state less component' }) => (
  <div className={css.component}>
		<h1>{str}</h1>
  </div>
);

BuildNumber.propTypes = {
	str: PropTypes.string
};

export default styleable(css)(BuildNumber);
