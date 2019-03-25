import {combineReducers} from "redux";
import postsReducer from "./postsReducer";
import {loadingBarReducer} from "react-redux-loading-bar";

export default combineReducers({
    posts: postsReducer,
    loadingBar: loadingBarReducer
})