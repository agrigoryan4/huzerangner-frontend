import axios from 'axios';
const rootURL = 'https://huzerangner.herokuapp.com/'

export const getPostSingle = (postId) => axios.get(`${rootURL}/posts/post/${postId}`);
export const getPosts = (page) => axios.get(`${rootURL}/posts/${page}`);