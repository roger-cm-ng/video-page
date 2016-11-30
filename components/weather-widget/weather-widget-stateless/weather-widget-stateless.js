import React from 'react';
import styleable from 'react-styleable';
import '../../../styles/core.scss';
import css from './weather-widget-stateless.scss';
import a2d from 'angle-to-direction';
import moment from 'moment';

const WeatherWidgetStateless = ({ data, wind, unit }) => (
  <div className={`hwrld ${css.hwrld}`}>
    <div
      className={css['top-left']}
    >
      <div className={css.location}>{data.name}</div>
      <div className={css.time}>{moment().format('ddd h:mma')}</div>
      <div className={css.condition}>{data.weather[0].main}</div>
    </div>

    <div
      className={css['top-right']}
    >
      <div className={css.temp}>
        <span className={css.num}>{Math.round(data.main.temp)}</span>
        <sup className={css.deg}>{unit === 'metric' ? '°C' : '°F'}</sup>
      </div>
    </div>

    <div
      className={css.bottom}
    >
      <div className={css.wind}>{wind ? (<span><span className={css['wind-txt']}>Wind:</span>{data.wind.speed} {unit === 'metric' ? 'm/s' : 'mi/hr'} {a2d.degreeAbbr(data.wind.deg)}</span>) : ''}</div>

      <div className={css['min-max-temp']}>
        <span>{Math.round(data.main.temp_min)}</span>
        <sup>{unit === 'metric' ? '°C' : '°F'}</sup> - <span>{Math.round(data.main.temp_max)}</span>
        <sup>{unit === 'metric' ? '°C' : '°F'}</sup>
      </div>

      <div className={css.powered}>Powered by Fairfax Media</div>
    </div>
  </div>
);

WeatherWidgetStateless.propTypes = {
  data: React.PropTypes.object,
  wind: React.PropTypes.bool,
  unit: React.PropTypes.string
};

export default styleable(css)(WeatherWidgetStateless);
