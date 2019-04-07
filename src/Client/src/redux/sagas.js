import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import outcomeSagas from './outcome/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    outcomeSagas()
  ]);
}
