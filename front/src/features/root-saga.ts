import { all } from 'redux-saga/effects';
import blogSaga from './blog/sagas';

export default function* rootSaga() {
  yield all([blogSaga()]);
}
