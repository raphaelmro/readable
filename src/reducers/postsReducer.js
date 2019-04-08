const INITIAL_DATA_STATE = {
  posts: {}
};

export default (state = INITIAL_DATA_STATE, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: action.payload
      };
    case "VOTE_POST":
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
