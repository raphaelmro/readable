import { VOTE } from "../actions/vote";

const voteReducer = (state = {}, action) => {
  const { id, score } = action;
  if (action.type === VOTE) {
    return { [id]: score };
  } else {
    return state;
  }
};

export default voteReducer;
