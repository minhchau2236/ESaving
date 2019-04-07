import { LOAD_CATEGORIES_SUCCESS,
  CREATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
} from './../../../constants/actionTypes';
import _ from 'lodash';

const initialState = {
  categories: []
};
export default function outcomeCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CATEGORIES_SUCCESS: {
      const categories = Object.assign([], action.categories);
      return { ...state, categories };
    }
    case CREATE_CATEGORY_SUCCESS: {
      const category = Object.assign({}, action.category);
      return { ...state, categories: [...state.categories, category] };
    }
    case UPDATE_CATEGORY_SUCCESS: {
      const selectedIndex = _.findIndex(state.categories, { id: action.category.id });
      state.categories.splice(selectedIndex, 1, action.category);
      return {
        ...state, categories: [
        ...state.categories ]
      };
    }
    case DELETE_CATEGORY_SUCCESS: {
      const resultCategories = state.categories.filter((category) => {
        return category.id !== action.categoryId;
      });
      return { ...state, categories: [...resultCategories] };
    }
    default: {
      return state;
    }
  }
}
