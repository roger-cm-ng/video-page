import { RESULTS_FETCHED_ERROR, NETWORK_ERROR } from '../helpers/common-actions';

export default function (state = null, action) {
	switch (action.type) {
		case RESULTS_FETCHED_ERROR: {
			return action.payload;
		}
		case NETWORK_ERROR: {
			return action.error;
		}
		default:
  }
	return state;
}
