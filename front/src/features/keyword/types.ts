import { SET_BLOG } from './constants';
import { Blog } from '../../models/Blog';
import { Action } from 'redux';

export enum Sort {
  Similar = 'similar',
  Date = 'date'
}

export interface SetBlogListAction extends Action {
  type: typeof SET_BLOG,
  blog: Blog,
}

export type BlogState = {
  blog: Blog | null
}

export type KeywordActionTypes = SetBlogListAction;