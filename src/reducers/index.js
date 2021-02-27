import { combineReducers } from 'redux';
import paginationReducer from './pagination';
import postsReducer from './posts';
import themeReducer from './theme';

const rootReducer = combineReducers({
  pagination: paginationReducer,
  posts: postsReducer,
  themeMode: themeReducer
});

export default rootReducer;
