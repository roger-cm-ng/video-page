import { GENRES_DEDUPED } from './drop-down-actions';

export default function (state = [], action) {
	switch (action.type) {
      case GENRES_DEDUPED:
				return action.payload;
			default:
    }
	return state;
}
