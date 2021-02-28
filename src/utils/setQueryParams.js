
/**
 * sets a pair of url string query parameter-value
 * @param {string} param 
 * @param {string} val 
 */
const setQueryParams = (param, val) => {
  let queryParams = new URLSearchParams(window.location.search);
  // queryParams.set('query', query);
  // queryParams.set('page', 1);
  queryParams.set(param, val);
  window.history.replaceState(null, null, '?' + queryParams.toString());
};

export default setQueryParams;
