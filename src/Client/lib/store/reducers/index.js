import {combineReducers} from 'redux';
import category from './outcomeCategoryReducer';
import outcomeItem from './outcomeItemReducer';
import outcome from './outcomeReducer';
import { authReducer as authentication } from './auth.reducer';

const rootReducer = combineReducers({
  category,
  outcomeItem,
  outcome,
  authentication
});

export default rootReducer;