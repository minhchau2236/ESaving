import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';
import outcome from './outcome/reducers';

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  outcome
});

export default reducers;