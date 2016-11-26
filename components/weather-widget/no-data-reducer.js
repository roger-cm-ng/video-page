import { NO_DATA_ACTIVATED } from './weather-widget-actions';

export default function (state = false, action) {
  switch (action.type) {
    case NO_DATA_ACTIVATED:
      return action.bool;
		default:
	}

  return state;
}
