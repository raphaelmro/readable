import * as api from "../utils/api";

export const LOAD_POST = "LOAD_POST";
export const LOAD_NEW_POST = "LOAD_NEW_POST";
export const DELETE_POST = "DELETE_POST";



export const loadPost = post => ({
  type: LOAD_POST,
  post
});

export const fetchPost = postId => dispatch =>
  api.fetchAPost(postId).then(post => dispatch(loadPost(post)));

export const updatePost = post => dispatch =>
  api.updatePost(post).then(post => dispatch(loadPost(post)));

export const loadNewPost = post => ({
  type: LOAD_NEW_POST,
  post
});

export const addPost = post => dispatch =>
  api.addPost(post).then(post => dispatch(loadNewPost(post)));

export const deletePost = post => ({
  type: DELETE_POST,
  post
});

export const removePost = post => dispatch =>
  api.deletePost(post.id).then(dispatch(deletePost(post)));
