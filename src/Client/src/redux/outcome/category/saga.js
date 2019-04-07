
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import OutcomeCategoryService from '../../../services/outcomeCategory.service';
import {
  LOAD_CATEGORIES,
  SAVE_CATEGORY,
  DELETE_CATEGORY
} from '../../../constants/actionTypes';

import {
    loadCategoriesSuccess,
    createCategorySuccess,
    deleteCategorySuccess,
    updateCategorySuccess
} from './actions';

const outcomeCategoryService = new OutcomeCategoryService();

const loadCategoriesAsync = async () =>
    await outcomeCategoryService.getAll();
const saveCategoryAsync = async (category) =>
        await outcomeCategoryService.save(category);
const deleteCategoryAsync = async (id) =>
        await outcomeCategoryService.delete(id).then(
          
        );   

function* loadCategories({ payload }) {
    let a = 5;
    try {
        const categories = yield call(loadCategoriesAsync);
        if (categories) {
            yield put(loadCategoriesSuccess(categories));
        } else {
            // catch throw
            console.log('load categories failed :', categories.message)
        }
    } catch (error) {
        // catch throw
        console.log('login error : ', error)
    }
}

function* saveCategory({ payload }) {
  try {
      const category = yield call(saveCategoryAsync, payload);
      console.log(category);
      if (category) {
        yield put(!payload.id ? createCategorySuccess(category): updateCategorySuccess(category));
      } else {
          // catch throw
          console.log('save categories failed :', category.message)
      }
  } catch (error) {
      // catch throw
      console.log('login error : ', error)
  }
}

function* deleteCategory({ payload }) {
  try {
      const category = yield call(deleteCategoryAsync, payload);
      console.log(category);
      if (!category.message) {
          yield put(deleteCategorySuccess(payload));
      } else {
          // catch throw
          console.log('save categories failed :', category.message)
      }
  } catch (error) {
      // catch throw
      console.log('login error : ', error)
  }
}

export function* watchLoadCategory() {
    yield takeEvery(LOAD_CATEGORIES, loadCategories);
}

export function* watchSaveCategory() {
  yield takeEvery(SAVE_CATEGORY, saveCategory);
}

export function* watchDeleteCategory() {
  yield takeEvery(DELETE_CATEGORY, deleteCategory);
}

export default function* rootSaga() {
    yield all([
        fork(watchLoadCategory),
        fork(watchSaveCategory),
        fork(watchDeleteCategory)
    ]);
}