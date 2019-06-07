import { LOAD_POSTS } from "../actions/posts";
import { LOAD_NEW_POST, DELETE_POST } from "../actions/post";
import { VOTE } from "../actions/vote";

const initialState = {
  fetching: false,
  items: [],
  error: " "
};

const postsReducer = (state = initialState, action) => {
  const { posts, post, id, score } = action;
  switch (action.type) {
    case LOAD_POSTS:
      return posts;
    case LOAD_NEW_POST:
      return [...state, post];
    case DELETE_POST:
      return state.filter(p => p.id !== post.id);
    case VOTE:
      return {
        ...state,
        items: state.items.map(post => {
          if (post.id === action.postId) {
            return {
              ...post,
              voteScore:
                action.vote === "upVote"
                  ? post.voteScore + 1
                  : post.voteScore - 1
            };
          }
          return post;
        })
      };
    default:
      return state;
  }
};

export default postsReducer;
