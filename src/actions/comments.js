import * as api from "../utils/api";

export const LOAD_COMMENTS = "LOAD_COMMENTS";
export const LOAD_COMMENT = "LOAD_COMMENT";
export const LOAD_NEW_COMMENT = "LOAD_NEW_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const loadComments = comments => ({
  type: LOAD_COMMENTS,
  comments
});

export const fetchComments = postId => dispatch =>
  api.fetchComments(postId).then(comments => dispatch(loadComments(comments)));

export const loadComment = comment => ({
  type: LOAD_COMMENT,
  comment
});

export const fetchComment = commentId => dispatch =>
  api.fetchAComment(commentId).then(comment => dispatch(loadComment(comment)));

export const updateComment = comment => dispatch =>
  api.updateComment(comment).then(comment => dispatch(loadComment(comment)));

export const loadNewComment = comment => ({
  type: LOAD_NEW_COMMENT,
  comment
});
export const addComment = comment => dispatch =>
  api.addComment(comment).then(comment => dispatch(loadNewComment(comment)));

export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const removeComment = comment => dispatch =>
  api.deleteComment(comment.id).then(dispatch(deleteComment(comment)));
