export const MODAL_CONTENT_LOADED = 'MODAL_CONTENT_LOADED';
export const MODAL_CLOSED = 'MODAL_CLOSED';
export const REDUCER_HIDE_ACTIVATED = 'REDUCER_HIDE_ACTIVATED';

export function loadModalContent(payload) {
	return {
		type: MODAL_CONTENT_LOADED,
		payload
	};
}

export function closeModal() {
	return {
		type: MODAL_CLOSED
	};
}

export function activateReducerHide() {
	return {
		type: REDUCER_HIDE_ACTIVATED
	};
}
