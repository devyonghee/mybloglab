import { SEARCH } from './constants';
import { KeywordActionTypes, Sort } from './types';

const search = (keyword: string, sort: Sort = Sort.Similar): KeywordActionTypes => {
  return {
    type: SEARCH,
    keyword,
    sort,
  };
};

export {
  search
};