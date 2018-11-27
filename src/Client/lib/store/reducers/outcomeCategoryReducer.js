import { outcomeCategoryConstants } from '../../constants/action-types';
export default function outcomeCategoryReducer(state = [
], action) {
  switch (action.type) {
    // case ADD_CATEGORY_SUCCESS: {    
    //   return [...state, Object.assign({}, action.category)];
    // }
    case outcomeCategoryConstants.LOAD_CATEGORIES_SUCCESS: {
      const categories = Object.assign([], action.categories);
      return categories;
    }
    case outcomeCategoryConstants.CREATE_CATEGORY_SUCCESS: {
      const category = Object.assign({}, action.category);
      return [...state, category];
    }
    case outcomeCategoryConstants.UPDATE_CATEGORY_SUCCESS: {
      return [
        ...state.filter((category) => { return category.id != action.category.id; }),
        Object.assign({}, action.category)];
    }
    case outcomeCategoryConstants.DELETE_CATEGORY_SUCCESS: {
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