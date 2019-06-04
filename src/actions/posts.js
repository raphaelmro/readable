import * as api from '../utils/api'

export const LOAD_POSTS = 'LOAD_POSTS'
export const loadPosts = ( posts ) => ({
  type: LOAD_POSTS,
  posts
})

export const fetchPosts = () => dispatch => (
  api.fetchPosts()
    .then(posts =>
      dispatch(loadPosts(posts))
    )
)