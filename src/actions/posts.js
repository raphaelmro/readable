import api from "../utils/api";

export const FETCH_POSTS = "FETCH_POSTS";
export const VOTE_POST = "VOTE_POST";

export const fetchPosts = () => async dispatch => {
  const response = await api.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export function votePost(id, vote) {
  return dispatch => {
    api
      .post(`/posts/${id}`, { option: vote })
      .then(response => dispatch({ type: VOTE_POST, payload: response.data }));
  };
}
