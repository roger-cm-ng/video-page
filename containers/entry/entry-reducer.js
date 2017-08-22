import {ACTIONED} from './entry-actions';

export default function (state = null, action) {
    switch (action.type) {
        case ACTIONED:
            return action.payload;
        default:
    }

    return state;
}
