import { TOGGLE_THEME } from '../constants';

const initialState = window.localStorage.getItem('themeMode') === 'dark' ? 'dark' : 'light'; 

const reducer = (state = initialState, action) => {
  if(action.type === TOGGLE_THEME) {
    const nextTheme = state === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('themeMode', nextTheme);
    return nextTheme;
  }
  else return state;
};

export default reducer;