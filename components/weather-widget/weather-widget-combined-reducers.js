import { combineReducers } from 'redux';
import weatherWidgetReducer from './weather-widget-reducer';
import noDataReducer from './no-data-reducer';

const WeatherWidgetCombinedReducers = combineReducers({
  weatherWidgetReducer,
  noDataReducer
});

export default WeatherWidgetCombinedReducers;
