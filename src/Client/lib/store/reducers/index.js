import {combineReducers} from 'redux';
import categories from './outcomeCategoryReducer';

const rootReducer = combineReducers({
  categories
});

export default rootReducer;