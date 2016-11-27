import React from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './loading-modal-in.scss';

const LoadingModalIn = ({ children }) => (
  <div className={`hwrld ${css.hwrld}`}>
    <div className={css['spinning-wheel']}>
      <img src="++BASE_URL++/images/bitmaps/loading-blue-on-white-70px.gif" alt="loading" />
    </div>
    <div className={css.wrapper}>
      <div className={css['loading-title']} >
        Processing
      </div>
      <div className={css['loading-text']} >
        {children}
      </div>
    </div>
  </div>
);

LoadingModalIn.propTypes = {
  children: React.PropTypes.string
};

export default styleable(css)(LoadingModalIn);
