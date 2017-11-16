import React from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './loading-generic-in.scss';

const LoadingGenericIn = ({ children }) => (
  <div className={`hwrld ${css.hwrld}`}>
    <div className={css['spinning-wheel']}>
      <img src="++BASE_URL++/images/bitmaps/loading-blue-on-white-70px.gif" alt="loading" />
    </div>
    <div className={css.text}>{ children }</div>
  </div>
);

LoadingGenericIn.propTypes = {
  children: React.PropTypes.string
};

export default styleable(css)(LoadingGenericIn);
