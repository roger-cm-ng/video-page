import { WEATHER_DATA_ACQUIRED } from './weather-widget-actions';

export default function (state = null, action) {
  switch (action.type) {
    case WEATHER_DATA_ACQUIRED:
      return action.payload;
		default:
	}

  return state;
}
