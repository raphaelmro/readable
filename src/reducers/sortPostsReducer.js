import { SORT } from "../actions/sortPosts";

const sortPostsReducer = (state = {}, action) => {
  const { orderBy, sortBy } = action;
  switch (action.type) {
    case SORT:
      return {
        ...state,
        orderBy,
        sortBy
      };
    default:
      return state;
  }
};

export default sortPostsReducer;
