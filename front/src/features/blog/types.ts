import { Blog, Post } from '@src/models/Blog';
import { Action } from 'redux';
import { SET_BLOG, SET_POST_RANK } from './constants';

export interface SetBlogListAction extends Action {
  type: typeof SET_BLOG;
  blog: Blog;
}

export interface SetPostRankAction extends Action {
  type: typeof SET_POST_RANK;
  post: Post;
  keyword: string;
}

export const enum NaverSort {
  Similar = 'similar',
  Date = 'date',
}

export type BlogState = {
  blog: Blog | null;
};

export type KeywordActionTypes = SetBlogListAction | SetPostRankAction;
