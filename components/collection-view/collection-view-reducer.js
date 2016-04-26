import { VIEW_CHOSEN } from './collection-view-actions';

export default function (state = 'list', action) {
	switch (action.type) {
      case VIEW_CHOSEN:
				return action.payload;
			default:
    }
	return state;
}
