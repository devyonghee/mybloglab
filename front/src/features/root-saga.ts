import { all } from 'redux-saga/effects';
import keywordSaga from '@src/features/keyword/sagas';
import blogSaga from './blog/sagas';

export default function* rootSaga() {
  yield all([blogSaga(), keywordSaga()]);
}
