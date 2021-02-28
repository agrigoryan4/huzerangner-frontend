import qs, { parse } from 'qs';

const getQueryParams = () => {
  return qs.parse(window.location.search, { ignoreQueryPrefix: true });
};

export default getQueryParams;