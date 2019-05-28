import { types } from "../actions/posts";
import _ from "lodash";

const INITIAL_DATA_STATE = {
  posts: {},
  fetching: false,
  error: ""
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
    case types.SORT_BY_DATE:
      const postsSortByDate = _.sortBy(action.payload, [
        function(post) {
          return post.voteScore;
        }
      ]).reverse();
      return {
        ...state,
        posts: postsSortByDate
      };
    default:
      return state;
  }
};
