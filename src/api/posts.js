import axios from 'axios';
import { POSTS_PER_PAGE } from '../constants';
const rootURL = process.env.REACT_APP_SERVER_URL || 'http://192.168.1.60:5000';

export const getPostSingle = (postId) => axios.get(`${rootURL}/posts/post/?id=${postId}&single=true`);
export const getSimilarPosts = (postId) => axios.get(`${rootURL}/posts/post/?id=${postId}&similar=true`);
export const getTags = () => axios.get(`${rootURL}/posts/tags/`);
export const getPosts = (page, query) => {
  return axios.get(`
  ${rootURL}/posts/?${query ? `query=${query}` : `all=true`}&page=${page}&limit=${POSTS_PER_PAGE}
  `);
};
