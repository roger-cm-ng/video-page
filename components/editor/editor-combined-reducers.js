import { combineReducers } from 'redux';
import modalReducer from '../details-modal/modal-reducer';
import asyncErrorHandlerReducer from '../async-error-handler/async-error-handler-reducer';
import listReducer from './list/list-reducer';
import editFormReducer from './edit/edit-form-reducer';

const EditorCombinedReducers = combineReducers({
  modalReducer,
  asyncErrorHandlerReducer,
  listReducer,
  editFormReducer
});

export default EditorCombinedReducers;
