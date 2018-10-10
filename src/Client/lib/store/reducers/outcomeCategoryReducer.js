import { LOAD_CATEGORIES_SUCCESS, CREATE_CATEGORY_SUCCESS, DELETE_CATEGORY_SUCCESS, UPDATE_CATEGORY_SUCCESS } from '../../constants/action-types';
export default function outcomeCategoryReducer(state = [
], action) {
  switch (action.type) {
    // case ADD_CATEGORY_SUCCESS: {    
    //   return [...state, Object.assign({}, action.category)];
    // }
    case LOAD_CATEGORIES_SUCCESS: {
      const categories = Object.assign([], action.categories);
      return categories;
    }
    case CREATE_CATEGORY_SUCCESS: {
      const category = Object.assign({}, action.category);
      return [...state, category];
    }
    case UPDATE_CATEGORY_SUCCESS: {
      return [
        ...state.filter((category) => { return category.id != action.category.id; }),
        Object.assign({}, action.category)];
    }
    case DELETE_CATEGORY_SUCCESS: {
      const resultCategories = state.filter((category) => {
        return category.id !== action.categoryId;
      });
      return [...resultCategories];
    }
    default: {
      return state;
    }
  }
}