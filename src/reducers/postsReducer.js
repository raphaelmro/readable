import { types } from '../actions/posts'

const INITIAL_DATA_STATE = {
  posts: {},
  fetching: false,
  error: ''
};

export default (state = INITIAL_DATA_STATE, action) => {
  switch (action.type) {
    case types.LOAD_POSTS_REQUEST:
      return {
        ...state,
        fetching: action.payload
      };
    case types.LOAD_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
