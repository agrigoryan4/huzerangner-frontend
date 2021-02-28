import { PAGE_CHANGE, TOTAL_PAGES } from '../constants';
import { POSTS_PER_PAGE } from '../constants';
// utils
import getQueryParams from '../utils/getQueryParams';


const initialState = {
  activePage: parseInt(getQueryParams().page) || 1,
  totalPages: parseInt(getQueryParams().page) || 1
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case PAGE_CHANGE:
      return {
        ...state,
        activePage: action.payload
      };
    case TOTAL_PAGES:
      let totalPosts = action.payload;
      let totalPages;
      if (totalPosts > 0) {
        totalPages = Math.ceil(action.payload / POSTS_PER_PAGE);
      } else totalPages = 1;
      return {
        ...state,
        totalPages: totalPages,
      };
    default:
      return state;
  };
}

export default reducer;
