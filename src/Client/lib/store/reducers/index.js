import {combineReducers} from 'redux';
import categories from './outcomeCategoryReducer';
import { authReducer as authentication } from './auth.reducer';

const rootReducer = combineReducers({
  categories,
  authentication
});

export default rootReducer;