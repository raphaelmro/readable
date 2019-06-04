import * as api from "../utils/api";

export const VOTE = "VOTE";
export const VOTE_ERROR = "VOTE_ERROR";

export const vote = payload => ({
  type: VOTE,
  id: payload.id,
  score: payload.voteScore
});

export const postVote = (id, option, type) => dispatch => {
  return api
    .vote(id, option, type)
    .then(payload =>
      dispatch({ type: VOTE,
                  id: payload.id,
                  score: payload.voteScore })
    )
    .catch(error => dispatch({ type: VOTE_ERROR, error }));
};
