import api from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const types = {
  LOAD_POSTS_REQUEST: "LOAD_POSTS_REQUEST",
  LOAD_POSTS_SUCCESS: "LOAD_POSTS_SUCCESS",
  LOAD_POSTS_FAILURE: "LOAD_POSTS_FAILURE",
  LOAD_POSTS_VOTE: "LOAD_POSTS_VOTE"
}

export const loadPosts = () => async dispatch => {
  dispatch({type: types.LOAD_POSTS_REQUEST, payload: true})
  try {
    const response = await api.get("posts")
    dispatch({type: types.LOAD_POSTS_SUCCESS, payload: response.data})
    dispatch({type: types.LOAD_POSTS_REQUEST, payload: false})
  } catch (error) {
    dispatch({type: types.LOAD_POSTS_FAILURE, error: 'Não foi possivel exibir os posts'})
    dispatch({type: types.LOAD_POSTS_REQUEST, payload: false})
  }
}

export const loadVotePost = (id, vote) => async dispatch => {
  dispatch({ type: types.LOAD_POSTS_REQUEST, payload: true })
  try {
    const response = await api.post(`/posts/${id}`, { option: vote })
    dispatch({ type: types.LOAD_POSTS_VOTE });
    dispatch(loadPosts())
  } catch (error) {
    dispatch({ type: types.LOAD_POSTS_FAILURE, error: 'Não foi possível votar' });
    dispatch({ type: types.LOAD_POSTS_REQUEST, payload: false })
  }
}

/*export const fetchPosts = () => async dispatch => {
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
  };*/
