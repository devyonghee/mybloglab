import { KeywordActionTypes, Sort } from './types';
import { Dispatch } from 'redux';
import { SET_BLOG_LIST } from './constants';
import { Blog } from '../../models/Blog';

const search = (keyword: string, sort: Sort = Sort.Similar) => {
  return async (dispatch: Dispatch<KeywordActionTypes>): Promise<void> => {
    const response = await fetch(`/keyword/search?keyword=${keyword}`, { method: 'get' });
    console.log(response);
    dispatch(setBlogList([]))
  };
};

const setBlogList = (blogList: Array<Blog>): KeywordActionTypes => {
  return {
    type: SET_BLOG_LIST,
    blogList: blogList,
  };
};

export const createActions = {
  search
};

export default {
  setBlogList
};