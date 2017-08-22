import { GET_ALBUM } from './delete-me-actions';

const INITIAL_STATE = { albumTitle: undefined };

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
    case GET_ALBUM:
        return {...state, albumTitle: action.payload.data.title};

    default:
    }

    return state;
}
