import { ADD_CATEGORY_SUCCESS,
  LOAD_CATEGORIES,
  SAVE_CATEGORY,
  DELETE_CATEGORY,
  LOAD_CATEGORIES_SUCCESS,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_SUCCESS
 } from '../../../constants/actionTypes';

export function addCategory(category) {
  return { type: ADD_CATEGORY_SUCCESS, category };
}

export function loadCategories() {
  return { type: LOAD_CATEGORIES };
} 

export function saveCategory(category) {
  return { type: SAVE_CATEGORY, payload: category };
}

export function deleteCategory(id) {
  return { type: DELETE_CATEGORY, payload: id };
}


export function loadCategoriesSuccess(categories) {
  return { type: LOAD_CATEGORIES_SUCCESS, categories };
} 

export function createCategorySuccess(category) {
  return { type: CREATE_CATEGORY_SUCCESS, category };
} 

export function deleteCategorySuccess(id) {
  return { type: DELETE_CATEGORY_SUCCESS, categoryId: id };
} 

export function updateCategorySuccess(category) {
  return { type: UPDATE_CATEGORY_SUCCESS, category };
} 


// export function saveCategory(category) {
//   return function(dispatch) {
//     const outcomeCategoryService = new OutcomeCategoryService();
//     outcomeCategoryService.save(category).then((savedCategory) => {
//       if(!savedCategory.id) {
//         dispatch(createCategorySuccess(savedCategory));
//       } else {
//         dispatch(updateCategorySuccess(savedCategory));
//       }
//     }).catch((error)=> {
//       throw(error);
//     });
//   };
// }

// export function deleteCategory(id) {
//   return function(dispatch) {
//     const outcomeCategoryService = new OutcomeCategoryService();
//     outcomeCategoryService.delete(id).then(() => {
//       dispatch(deleteCategorySuccess(id));
//     }).catch((error)=>{
//       throw(error);
//     });
//   };
// }
