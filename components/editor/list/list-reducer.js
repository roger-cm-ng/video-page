import { WIDGETS_ACQUIRED } from './list-actions';

export default function (state = [], action) {
  switch (action.type) {
    case WIDGETS_ACQUIRED:
      return action.payload.results;
		default:
	}

  return state;
}
