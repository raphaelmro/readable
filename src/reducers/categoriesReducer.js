const INITIAL_DATA_STATE = [];

export default (state = INITIAL_DATA_STATE, action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};
