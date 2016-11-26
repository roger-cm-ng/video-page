import React from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './weather-widget-stateless.scss';

const WeatherWidgetStateless = ({ data, wind }) => (
  <div className={`hwrld ${css.hwrld}`}>
    <h1>Weather widget</h1>
    <span>{data.name} {wind}</span>
  </div>
);

WeatherWidgetStateless.propTypes = {
  data: React.PropTypes.object,
  wind: React.PropTypes.bool
};

export default styleable(css)(WeatherWidgetStateless);
