import { all } from 'redux-saga/effects';
import cateogrySaga from './category/saga';

export default function* rootSaga(getState) {
  yield all([
    cateogrySaga()
  ]);
}
