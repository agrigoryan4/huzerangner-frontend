import { PAGE_CHANGE, TOTAL_PAGES } from '../constants';

export const changePage = (activePage) => {
  return {
    type: PAGE_CHANGE,
    payload: activePage
  };
};

export const totalPagesChange = (totalPosts) => {
  return {
    type: TOTAL_PAGES,
    payload: totalPosts
  };
};