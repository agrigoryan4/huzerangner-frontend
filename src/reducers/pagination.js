import { PAGE_CHANGE, TOTAL_PAGES } from '../constants';
import { POSTS_PER_PAGE } from '../constants';

const initialState = {
  activePage: 1,
  totalPages: 1,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case PAGE_CHANGE:
      return {
        ...state,
        activePage: action.payload
      };
    case TOTAL_PAGES:
      console.log(Math.ceil(action.payload / POSTS_PER_PAGE));
      return {
        ...state,
        totalPages: Math.ceil(action.payload / POSTS_PER_PAGE),
      };
    default:
      return state;
  };
}

export default reducer;
