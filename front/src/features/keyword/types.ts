import { AppAction } from '@src/features/root-actions';
import { SEARCH_KEYWORD } from './constants';

export interface SearchKeywordAction
  extends AppAction<typeof SEARCH_KEYWORD, { keyword: string }> {}

export type KeywordActionTypes = SearchKeywordAction;
