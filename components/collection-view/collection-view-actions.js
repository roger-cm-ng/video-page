export const VIEW_CHOSEN = 'VIEW_CHOSEN';

export function chooseView(payload) {
  return {
		type: VIEW_CHOSEN,
		payload
	};
}
