import { WIDGETS_ACQUIRED, NEW_WIDGET_INSERTED } from './list-actions';

export default function (state = [], action) {
  switch (action.type) {
    case WIDGETS_ACQUIRED:
      return action.payload.results;

    case NEW_WIDGET_INSERTED:
      return action.payload.results;
		default:
	}

  return state;
}
