import { MOVIES_LOADED	} from './app-actions';

export default function (state = null, action) {
	switch (action.type) {
		case MOVIES_LOADED:
			return action.payload;

		default:
    }

	return state;
}
