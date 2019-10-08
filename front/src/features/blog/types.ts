import { AppAction } from '@src/features/root-actions';
import { Moment } from 'moment';
import {
  CHECK_POST_EXISTENCE,
  SEARCH_BLOG,
  SEARCH_POST_RANK,
  SET_BLOG,
  SET_POST_PROPERTY,
} from './constants';

export type RemoteProps<T> = {
  loading: Boolean;
  value?: T;
};

export type BlogState = {
  title: string;
  link?: URL;
  image?: URL;
  posts: Array<Post>;
};

export interface Post {
  title: string;
  rank: RemoteProps<Number>;
  isExist: RemoteProps<Boolean>;
  link?: URL;
  created?: Moment;
}

export interface SetBlogAction extends AppAction<typeof SET_BLOG, BlogState> {}

export interface SetPostPropertyAction<T extends keyof Post>
  extends AppAction<typeof SET_POST_PROPERTY, { index: number; key: T; value: Post[T] }> {}

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
  | SetPostPropertyAction<keyof Post>
  | SearchBlogAction
  | CheckPostExistenceAction
  | SearchPostRankAction;
