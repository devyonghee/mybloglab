import { takeEvery, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { SEARCH_KEYWORD } from '@src/features/keyword/constants';
import { SearchKeywordAction } from './types';

function* searchKeyword(action: SearchKeywordAction) {
  try {
    const response: AxiosResponse = yield call(axios.get, 'keyword/search', {
      params: { keyword: action.payload.keyword },
    });

    console.log(response);
  } catch (e) {
    console.log(e.message);
  }
}

export default function* keywordSaga() {
  yield takeEvery(SEARCH_KEYWORD, searchKeyword);
}
