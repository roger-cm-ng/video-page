export const MOVIES_LOADED = 'MOVIES_LOADED';

export function getMovies(payload) {
	return {
		type: MOVIES_LOADED,
		payload
	};
}
