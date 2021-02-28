import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../constants';
import api from '../api';

export const getPosts = (page, query) => async(dispatch) => {
  dispatch({ type: FETCH_POSTS });
  try {
    const payload = await api.getPosts(page, query);
    if(payload) dispatch({ type: FETCH_POSTS_SUCCESS, payload: payload.data });
  } catch (error) {
    dispatch({ type: FETCH_POSTS_FAILURE }) 
  }
};