import { SEARCH } from './constants';
import { Blog } from '../../models/Blog';

export enum Sort {
  Similar = 'similar',
  Date = 'date'
}

export interface SearchAction {
  type: typeof SEARCH,
  keyword: string,
  sort: Sort
}

export interface BlogState {
  blogs: Blog[]
}

export type KeywordActionTypes = SearchAction;