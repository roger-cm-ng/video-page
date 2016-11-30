import React from 'react';
import styleable from 'react-styleable';
import coreStyles from '../../../styles/core.scss';
import css from './copy-and-paste.scss';

const CopyAndPaste = ({ data }) => (
  <div className={`hwrld ${css.hwrld}`}>
    <div className={css.instruction}>Copy and paste the code below in the body of the website</div>
    <p className={css.code}>
      &lt;div class=&quot;js-ffx-blue-weather-widget&quot;&gt;&lt;/div&gt;
      &lt;script src=&quot;http://morning-island-22730.herokuapp.com/bundles/ffx-blue-weather-widget.js&quot;&gt;&lt;/script&gt;
      &lt;script&gt;
        new FfxBlueWeatherWidget&#40;
          '.js-ffx-blue-weather-widget',
          &#123;
            fallBackLocation: '{data.fallBackLocation}',
            unit: '{data.unit}',
            wind: {data.wind ? 'true' : 'false'}
          &#125;
        &#41;
      &lt;/script&gt;
    </p>
  </div>
);

CopyAndPaste.propTypes = {
  data: React.PropTypes.object
};

export default styleable(css)(CopyAndPaste);
