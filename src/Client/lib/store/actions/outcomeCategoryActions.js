import { outcomeCategoryConstants } from '../../constants/action-types';
import OutcomeCategoryService from '../../services/outcomeCategory.service';

export function addCategory(category) {
  return { type: outcomeCategoryConstants.ADD_CATEGORY_SUCCESS, category };
} 

export function loadCategoriesSuccess(categories) {
  return { type: outcomeCategoryConstants.LOAD_CATEGORIES_SUCCESS, categories };
} 

export function createCategorySuccess(category) {
  return { type: outcomeCategoryConstants.CREATE_CATEGORY_SUCCESS, category };
} 

export function deleteCategorySuccess(id) {
  return { type: outcomeCategoryConstants.DELETE_CATEGORY_SUCCESS, categoryId: id };
} 

export function updateCategorySuccess(category) {
  return { type: outcomeCategoryConstants.UPDATE_CATEGORY_SUCCESS, category };
} 

export function loadCategories() {
  return function(dispatch) {
    const outcomeCategoryService = new OutcomeCategoryService();
    outcomeCategoryService.getAll().then((categories) => {
      dispatch(loadCategoriesSuccess(categories));
    }).catch((error)=>{
      throw(error);
    });
  };
}

export function saveCategory(category) {
  return function(dispatch) {
    const outcomeCategoryService = new OutcomeCategoryService();
    outcomeCategoryService.save(category).then((savedCategory) => {
      if(!savedCategory.id) {
        dispatch(createCategorySuccess(savedCategory));
      } else {
        dispatch(updateCategorySuccess(savedCategory));
      }
    }).catch((error)=> {
      throw(error);
    });
  };
}

export function deleteCategory(id) {
  return function(dispatch) {
    const outcomeCategoryService = new OutcomeCategoryService();
    outcomeCategoryService.delete(id).then(() => {
      dispatch(deleteCategorySuccess(id));
    }).catch((error)=>{
      throw(error);
    });
  };
}
