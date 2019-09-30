import { KeywordActionTypes } from '@src/features/keyword/types';
import { SEARCH_KEYWORD } from './constants';

const searchKeyword = (keyword: string): KeywordActionTypes => ({
  type: SEARCH_KEYWORD,
  payload: { keyword },
});

export { searchKeyword };
