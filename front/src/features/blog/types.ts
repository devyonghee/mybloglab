import { Blog, Post } from '@src/models/Blog';
import { AppAction } from '@src/features/root-actions';
import {
  CHECK_POST_EXISTENCE,
  SEARCH_BLOG,
  SEARCH_POST_RANK,
  SET_BLOG,
  SET_POST_PROPERTY,
} from './constants';

export interface SetBlogAction extends AppAction<typeof SET_BLOG, Blog> {}

export interface SetPostPropertyAction
  extends AppAction<typeof SET_POST_PROPERTY, { post: Post; id: keyof Post; value: any }> {}

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
  | SetPostPropertyAction
  | SearchBlogAction
  | CheckPostExistenceAction
  | SearchPostRankAction;

export type BlogState = {
  blog: Blog | null;
};
