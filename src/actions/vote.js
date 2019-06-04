import * as api from "../utils/api";
export const VOTE = "VOTE";
export const vote = (id, score) => ({
  type: VOTE,
  id,
  score
});

export const postVote = (id, option, type) =>{
   return api
    .vote(id, option, type)
    .then(item => console.log(item));
}
