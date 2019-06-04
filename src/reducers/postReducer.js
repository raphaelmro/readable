import { LOAD_POST, DELETE_POST } from "../actions/post";

const postReducer = (state = {}, action) => {
  const { post } = action;
  switch (action.type) {
    case LOAD_POST:
      return post;
    case DELETE_POST:
      return { ...post, deleted: true };
    default:
      return state;
  }
};

export default postReducer;
