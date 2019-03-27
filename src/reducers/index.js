import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import { loadingBarReducer } from "react-redux-loading-bar";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  loadingBar: loadingBarReducer
});
