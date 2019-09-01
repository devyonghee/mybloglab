import { Dispatch } from 'redux';
import { Blog, Post } from '@src/models/Blog';
import queryString from 'query-string';
import { RootState } from '@src/store/types';
import { SET_BLOG, SET_POST_RANK } from './constants';
import { KeywordActionTypes, NaverSort } from './types';

const defaultSort: NaverSort = NaverSort.Similar;
const defaultSearchCount: number = 100;

const setBlog = (blog: Blog): KeywordActionTypes => {
  return {
    type: SET_BLOG,
    blog,
  };
};

const setPostRank = (post: Post, keyword: string): KeywordActionTypes => {
  return {
    type: SET_POST_RANK,
    post,
    keyword,
  };
};

const searchBlog = (link: string) => {
  return async (dispatch: Dispatch<KeywordActionTypes>): Promise<void> => {
    const response: Response = await fetch(`blog?${queryString.stringify({ url: link })}`, {
      method: 'get',
    });
    if (!response.ok) {
      alert(response.statusText);
      return;
    }
    const json = await response.json();
    dispatch(setBlog(Blog.fromJson(json)));
  };
};

const searchPostRank = (post: Post, keyword: string) => {
  return async (
    dispatch: Dispatch<KeywordActionTypes>,
    getState: () => RootState,
  ): Promise<void> => {
    const { blog } = getState();
    if (!blog.blog || !blog.blog.link) {
      alert('블로그 주소가 존재하지 않습니다.');
      return;
    }

    const query = queryString.stringify({
      keyword,
      sort: defaultSort,
      display: defaultSearchCount,
    });
    const response: Response = await fetch(`blog/search?${query}`);
    console.log(response);
  };
};

export const createActions = {
  searchBlog,
  searchPostRank,
};

export default {
  setBlog,
  setPostRank,
};
