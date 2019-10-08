import { KeywordActionTypes, SearchedKeyword } from '@src/features/keyword/types';
import { ADD_KEYWORD, SEARCH_KEYWORD } from './constants';

const setKeyword = (keyword: SearchedKeyword): KeywordActionTypes => ({
  type: ADD_KEYWORD,
  payload: keyword,
});

const searchKeyword = (keyword: string): KeywordActionTypes => ({
  type: SEARCH_KEYWORD,
  payload: { keyword },
});

export { setKeyword, searchKeyword };
