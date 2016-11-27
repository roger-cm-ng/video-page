import { combineReducers } from 'redux';
import modalReducer from '../details-modal/modal-reducer';
import asyncErrorHandlerReducer from '../async-error-handler/async-error-handler-reducer';
import listReducer from './list/list-reducer';

const EditorCombinedReducers = combineReducers({
  modalReducer,
  asyncErrorHandlerReducer,
  listReducer
});

export default EditorCombinedReducers;
