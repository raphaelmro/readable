import api from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const types = {
  LOAD_POSTS_REQUEST: "LOAD_POSTS_REQUEST",
  LOAD_POSTS_SUCCESS: "LOAD_POSTS_SUCCESS",
  LOAD_POSTS_FAILURE: "LOAD_POSTS_FAILURE",
  LOAD_POSTS_VOTE: "LOAD_POSTS_VOTE",
  SORT_BY_DATE: "SORT_BY_DATE"
};

export const loadPosts = () => async dispatch => {
  dispatch(showLoading());
  dispatch({ type: types.LOAD_POSTS_REQUEST, payload: true });
  try {
    const response = await api.get("posts");
    dispatch({ type: types.LOAD_POSTS_SUCCESS, payload: response.data });
    dispatch({ type: types.LOAD_POSTS_REQUEST, payload: false });
  } catch (error) {
    dispatch({
      type: types.LOAD_POSTS_FAILURE,
      error: "Não foi possivel exibir os posts"
    });
    dispatch({ type: types.LOAD_POSTS_REQUEST, payload: false });
  }
  dispatch(hideLoading());
};

export const loadVotePost = (id, vote) => async dispatch => {
  dispatch({ type: types.LOAD_POSTS_REQUEST, payload: true });
  try {
    const response = await api.post(`/posts/${id}`, { option: vote });
    dispatch({ type: types.LOAD_POSTS_VOTE });
    dispatch(loadPosts());
  } catch (error) {
    dispatch({
      type: types.LOAD_POSTS_FAILURE,
      error: "Não foi possível votar"
    });
    dispatch({ type: types.LOAD_POSTS_REQUEST, payload: false });
  }
};

export const sortByDate = posts => async dispatch => {
  dispatch(showLoading());
  dispatch({ type: types.SORT_BY_DATE, payload: posts });
  dispatch(hideLoading());
};
