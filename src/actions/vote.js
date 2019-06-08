import * as api from "../utils/api";

export const VOTE = "VOTE";
export const VOTE_ERROR = "VOTE_ERROR";

export const vote = (id, score) => ({
  type: VOTE,
  id,
  score
});

export const postVote = (id, option, type) => dispatch =>
  api
    .vote(id, option, type)
    .then(item => dispatch(vote(item.id, item.voteScore)));
