import React from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './copy-and-paste.scss';

const CopyAndPaste = ({ data }) => (
  <div className={`hwrld ${css.hwrld}`}>
    Copy and paste
  </div>
);

CopyAndPaste.propTypes = {
  data: React.PropTypes.object
};

export default styleable(css)(CopyAndPaste);
