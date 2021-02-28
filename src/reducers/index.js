import { combineReducers } from 'redux';
import themeReducer from './theme';
import paginationReducer from './pagination';
import postsReducer from './posts';
import searchReducer from './search';

const rootReducer = combineReducers({
  themeMode: themeReducer,
  pagination: paginationReducer,
  posts: postsReducer,
  search: searchReducer,
});

export default rootReducer;
