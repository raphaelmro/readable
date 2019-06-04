import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";

import postsReducer from "./postsReducer";
import commentsReducer from "./commentsReducer";
import postReducer from "./postReducer";
import categoriesReducer from "./categoriesReducer";
import voteReducer from "./voteReducer";
import sortPostsReducer from "./sortPostsReducer";

export default combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
  vote: voteReducer,
  comments: commentsReducer,
  post: postReducer,
  sort: sortPostsReducer,
  loadingBar: loadingBarReducer
});
