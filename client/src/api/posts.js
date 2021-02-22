import axios from 'axios';
const rootURL = 'http://192.168.1.60:5000'

export const getPostSingle = (postId) => axios.get(`${rootURL}/posts/post/${postId}`);
export const getPosts = (page) => axios.get(`${rootURL}/posts/${page}`);