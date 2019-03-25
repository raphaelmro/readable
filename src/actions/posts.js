import api from "../utils/api";

export const FETCH_POSTS = "FETCH_POSTS";

export const fetchPosts = () => async dispatch => {
  const response = await api.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};
