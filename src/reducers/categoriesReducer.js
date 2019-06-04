import { LOAD_CATEGORIES } from "../actions/categories";

const categoriesReducer = (state = [], action) => {
  const { categories } = action;
  switch (action.type) {
    case LOAD_CATEGORIES:
      return categories;
    default:
      return state;
  }
};

export default categoriesReducer;
