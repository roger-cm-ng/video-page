import { combineReducers } from 'redux';
import deleteMeReducer from '../delete-me/delete-me-reducer';

const CombinedReducers = combineReducers({
	deleteMe: deleteMeReducer
});

export default CombinedReducers;
