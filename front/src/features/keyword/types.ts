import { AppAction } from '@src/features/root-actions';
import { SEARCH_KEYWORD, ADD_KEYWORD } from './constants';

export type KeywordState = Array<SearchedKeyword>;

export type Post = {
  title: string;
  link?: URL;
  description: string;
  bloggerName: string;
  bloggerLink?: URL;
};

export type SearchedKeyword = {
  keyword: string;
  monthlyPcQueryCnt: string;
  monthlyMobileQueryCnt: string;
  monthlyAvgPcClickCnt: string;
  monthlyAvgMobileClickCnt: string;
  monthlyAvgPcClickRate: string;
  monthlyAvgMobileClickRate: string;
  avgPcDepth: string;
  competitiveness: string;
  relKeywords: Array<String>;
  posts: Array<Post>;
};

export interface addKeywordAction extends AppAction<typeof ADD_KEYWORD, SearchedKeyword> {}

export interface SearchKeywordAction
  extends AppAction<typeof SEARCH_KEYWORD, { keyword: string }> {}

export type KeywordActionTypes = addKeywordAction | SearchKeywordAction;
