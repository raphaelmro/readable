import api from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const FETCH_POSTS = "FETCH_POSTS";
export const VOTE_POST = "VOTE_POST";

export const fetchPosts = () => async dispatch => {
  const response = await api.get("/posts");
  dispatch(showLoading());
  dispatch({ type: FETCH_POSTS, payload: response.data });
  dispatch(hideLoading());
};

export function votePost(id, vote) {
  return dispatch => {
    dispatch(showLoading());
    api
      .post(`/posts/${id}`, { option: vote })
      .then(response => dispatch({ type: VOTE_POST, payload: response.data }));
    dispatch(hideLoading());
  };
}
