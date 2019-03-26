import api from "../utils/api";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export const fetchCategories = () => async dispatch => {
  const response = await api.get("/categories");
  dispatch({ type: FETCH_CATEGORIES, payload: response.data });
};
