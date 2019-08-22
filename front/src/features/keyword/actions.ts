import { KeywordActionTypes, Sort } from './types';
import { Dispatch } from 'redux';
import { SET_BLOG } from './constants';
import { Blog } from '@src/models/Blog';

const setBlog = (blog: Blog): KeywordActionTypes => {
  return {
    type: SET_BLOG,
    blog: blog,
  };
};

const search = (keyword: string, sort: Sort = Sort.Similar) => {
  return async (dispatch: Dispatch<KeywordActionTypes>): Promise<void> => {
    const response: Response = await fetch(`/search/posts?url=${keyword}`, { method: 'get' });
    if (!response.ok) return alert(response.statusText);
    const json = await response.json();
    dispatch(setBlog(Blog.fromJson(json)));
  };
};

export const createActions = {
  search
};

export default {
  setBlog
};