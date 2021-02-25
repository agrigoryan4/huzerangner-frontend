import { combineReducers } from 'redux';
import paginationReducer from './pagination';
import postsReducer from './posts';

const rootReducer = combineReducers({
  pagination: paginationReducer,
  posts: postsReducer,
});

export default rootReducer;
