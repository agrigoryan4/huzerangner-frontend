import axios from 'axios';
import { POSTS_PER_PAGE } from '../constants';
const rootURL = process.env.SERVER_URL || 'http://localhost:5000';

export const getPostSingle = (postId) => axios.get(`${rootURL}/posts/post/${postId}`);
export const getPosts = (page, query) => {
  return axios.get(`
  ${rootURL}/posts/?${query ? `query=${query}` : `all=true`}&page=${page}&limit=${POSTS_PER_PAGE}
  `);
};