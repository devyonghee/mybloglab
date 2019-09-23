import { Blog, Post } from '@src/models/Blog';
import { AppAction } from '@src/features/root-actions';
import {
  CHECK_POST_EXISTENCE,
  SEARCH_BLOG,
  SEARCH_POST_RANK,
  SET_BLOG,
  SET_POST_EXISTENCE,
  SET_POST_RANK,
} from './constants';

export interface SetPostRankAction
  extends AppAction<typeof SET_POST_RANK, { post: Post; rank: Number }> {}

export interface SetBlogAction extends AppAction<typeof SET_BLOG, Blog> {}

export interface SetPostExistenceAction
  extends AppAction<typeof SET_POST_EXISTENCE, { post: Post; isExist: Boolean }> {}

export interface SearchBlogAction extends AppAction<typeof SEARCH_BLOG, string> {}

export interface CheckPostExistenceAction
  extends AppAction<typeof CHECK_POST_EXISTENCE, { post: Post; keyword: string }> {}

export interface SearchPostRankAction
  extends AppAction<typeof SEARCH_POST_RANK, { post: Post; keyword: string }> {}

export enum NaverSort {
  SIMILAR = 'similar',
  DATE = 'date',
}

export enum SearchType {
  EXISTENCE = 'existence',
  RANK = 'rank',
}

export type BlogActionTypes =
  | SetBlogAction
  | SetPostRankAction
  | SetPostExistenceAction
  | SearchBlogAction
  | CheckPostExistenceAction
  | SearchPostRankAction;

export type BlogState = {
  blog: Blog | null;
};
