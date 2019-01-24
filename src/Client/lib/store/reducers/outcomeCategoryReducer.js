import { outcomeCategoryConstants } from '../../constants/action-types';

const initialState = {
  categories: []
};
export default function outcomeCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case outcomeCategoryConstants.LOAD_CATEGORIES_SUCCESS: {
      const categories = Object.assign([], action.categories);
      return { ...state, categories };
    }
    case outcomeCategoryConstants.CREATE_CATEGORY_SUCCESS: {
      const category = Object.assign({}, action.category);
      return { ...state, categories: [...state, category] };
    }
    case outcomeCategoryConstants.UPDATE_CATEGORY_SUCCESS: {
      return {
        ...state, categories: [
          ...state.categories.filter((category) => { return category.id != action.category.id; }),
          Object.assign({}, action.category)]
      };
    }
    case outcomeCategoryConstants.DELETE_CATEGORY_SUCCESS: {
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