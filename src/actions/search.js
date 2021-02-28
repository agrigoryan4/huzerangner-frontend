import { CHANGE_CURRENT_QUERY } from '../constants';

export const changeSearchQuery = (query) => {
  return {
    type: CHANGE_CURRENT_QUERY,
    payload: query
  };
};
