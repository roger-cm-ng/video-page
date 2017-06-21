import { ACTIONED } from './reload-actions';

export default function (state = null, action) {
  switch (action.type) {
    case ACTIONED:
      return action.payload;
		default:
	}

  return state;
}
