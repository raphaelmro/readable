import * as api from '../utils/api'

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES'


export const loadCategories = (categories) => ({
  type: LOAD_CATEGORIES,
  categories
})

export const fetchCategories = () => dispatch => (
  api.fetchCategories()
    .then(categories =>
      dispatch(loadCategories(categories))
    )
)