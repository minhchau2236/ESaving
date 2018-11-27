import {combineReducers} from 'redux';
import categories from './outcomeCategoryReducer';
import outcomeItems from './outcomeItemReducer';
import { authReducer as authentication } from './auth.reducer';

const rootReducer = combineReducers({
  categories,
  outcomeItems,
  authentication
});

export default rootReducer;