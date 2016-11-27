import { MODAL_CONTENT_LOADED, REDUCER_HIDE_ACTIVATED, MODAL_CLOSED } from './details-modal-actions';
import _ from 'lodash';

export default function (state = {
	overlayClicked: false,
	headerFooter: 'hide',
	component: '',
	vis: false
}, action) {
	switch (action.type) {
		case MODAL_CONTENT_LOADED: {
			const cloned = _.clone(action.payload);
			return cloned;
		}
		case MODAL_CLOSED: {
			const cloned = _.clone(state);
			cloned.vis = false;
			return cloned;
		}
		case REDUCER_HIDE_ACTIVATED: {
			const cloned = _.clone(state);
			cloned.vis = false;
			return cloned;
		}
		default:
  }
	return state;
}
