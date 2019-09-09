import { Blog, Post } from '@src/models/Blog';
import { Action } from 'redux';
import { SET_BLOG, SET_POST_EXISTENCE, SET_POST_RANK } from './constants';

export interface SetBlogListAction extends Action {
  type: typeof SET_BLOG;
  blog: Blog;
}

export interface SetPostExistenceAction extends Action {
  type: typeof SET_POST_EXISTENCE;
  post: Post;
  isExist: boolean;
}

export interface SetPostRankAction extends Action {
  type: typeof SET_POST_RANK;
  post: Post;
  keyword: string;
}

export enum NaverSort {
  Similar = 'similar',
  Date = 'date',
}

export type BlogState = {
  blog: Blog | null;
};

export type BlogActionTypes = SetBlogListAction | SetPostExistenceAction | SetPostRankAction;
