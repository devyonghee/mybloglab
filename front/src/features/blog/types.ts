import { SET_BLOG, SET_POST_RANK } from './constants';
import { Blog, Post } from '@src/models/Blog';
import { Action } from 'redux';

export enum NaverSort {
  Similar = 'similar',
  Date = 'date'
}

export interface SetBlogListAction extends Action {
  type: typeof SET_BLOG,
  blog: Blog,
}

export interface SetPostRankAction extends Action {
  type: typeof SET_POST_RANK,
  post: Post,
  keyword: string,
}

export type BlogState = {
  blog: Blog | null
}

export type KeywordActionTypes = SetBlogListAction | SetPostRankAction;