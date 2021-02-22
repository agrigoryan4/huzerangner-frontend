import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from '../constants';

const initialState = {
  posts: [
    {
    _id: null,
    title: null,
    body: null,
    tags: null,
    createdAt: null,
    lastEdited: null
    }
  ],
  isLoading: true,
  isError: false,
  inTotal: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POSTS: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }
    case FETCH_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload.posts,
        inTotal: action.payload.inTotal,
        isLoading: false,
        isError: false,
      }
    }
    case FETCH_POSTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    }
    default: return state;
  };
}

export default reducer;