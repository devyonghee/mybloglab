import { SET_BLOG_LIST } from './constants';
import { Blog } from '../../models/Blog';
import { Action } from 'redux';

export enum Sort {
  Similar = 'similar',
  Date = 'date'
}

export interface SetBlogListAction extends Action {
  type: typeof SET_BLOG_LIST,
  blogList: Array<Blog>,
}

export type BlogState = {
  blogList: Array<Blog>
}

export type KeywordActionTypes = SetBlogListAction;