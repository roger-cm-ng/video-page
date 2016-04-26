import { combineReducers } from 'redux';
import moviesReducer from './movies-reducer';
import genresDedupedReducer from '../drop-down/genres-deduped-reducer';
import genreSelectedReducer from '../drop-down/genre-selected-reducer';
import collectionViewReducer from '../collection-view/collection-view-reducer';

const AppCombinedReducers = combineReducers({
  moviesReducer,
  genresDedupedReducer,
  genreSelectedReducer,
  collectionViewReducer
});

export default AppCombinedReducers;
