import { GET_ALBUM } from './delete-me-actions';

const INITIAL_STATE = { albumTitle: undefined };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
    case GET_ALBUM:
        return album();

    default:
    }

    function album() {
        const payload = action.payload;
        const message = payload.message;

        if (message) {
            const status = payload.status;

            return { ...state,
                albumTitle: `Sorry, I failed to retrieve the album; status = ${status} message = ${message}` };
        }

        return { ...state, albumTitle: payload.data.title };
    }

    return state;
}
