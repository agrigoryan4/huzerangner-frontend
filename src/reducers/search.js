// constants
import { CHANGE_CURRENT_QUERY } from '../constants';
// utils
import getQueryParams from '../utils/getQueryParams';

const initialState = {
  currentQuery: getQueryParams().query || null, 
};

const reducer = (state = initialState, action) => {
  if(action.type === CHANGE_CURRENT_QUERY) return {...state, currentQuery: action.payload};
  else return state;
};

export default reducer;
