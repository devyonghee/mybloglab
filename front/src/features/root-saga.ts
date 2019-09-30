import { all } from 'redux-saga/effects';
import blogSaga from './blog/sagas';
import keywordSaga from '@src/features/keyword/sagas';

export default function* rootSaga() {
  yield all([blogSaga(), keywordSaga()]);
}
