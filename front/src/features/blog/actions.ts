import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Blog, Post } from '@src/models/Blog';
import queryString from 'query-string';
import { RootState } from '@src/store/types';
import { SET_BLOG, SET_POST_EXISTENCE, SET_POST_RANK } from './constants';
import { BlogActionTypes, NaverSort } from './types';

const defaultSort: NaverSort = NaverSort.Similar;
const defaultSearchCount: number = 100;

const setBlog = (blog: Blog): BlogActionTypes => {
  return {
    type: SET_BLOG,
    blog,
  };
};

const setPostExistence = (post: Post, isExist: boolean): BlogActionTypes => {
  return {
    type: SET_POST_EXISTENCE,
    post,
    isExist,
  };
};

const setPostRank = (post: Post, keyword: string): BlogActionTypes => {
  return {
    type: SET_POST_RANK,
    post,
    keyword,
  };
};

const searchBlog = (link: string) => {
  return async (dispatch: Dispatch<BlogActionTypes>): Promise<void> => {
    const response: AxiosResponse = await axios.get(`blog`, {
      params: { url: link },
    });

    if (response.statusText !== 'OK') {
      alert('요청에 실패했습니다.');
      return;
    }
    dispatch(setBlog(Blog.fromJson(response.data)));
  };
};

const checkPostExistence = (post: Post) => {
  return async (dispatch: Dispatch<BlogActionTypes>, getState: () => RootState): Promise<void> => {
    const { blog } = getState();
    if (!blog.blog || !blog.blog.link) {
      alert('블로그 주소가 존재하지 않습니다.');
      return;
    }

    const response: AxiosResponse = await axios.get('blog/search', {
      params: {
        keyword: `"${post.title}"`,
        sort: defaultSort,
        display: 50,
      },
    });

    if (response.statusText !== 'OK' || !Array.isArray(response.data.items)) {
      dispatch(setPostExistence(post, false));
      return;
    }

    const findItem = response.data.items.find(
      (item: any) =>
        item.bloggerlink && blog.blog && blog.blog.link && item.bloggerlink === blog.blog.link.href,
    );

    dispatch(setPostExistence(post, !!findItem));
  };
};

const searchPostRank = (post: Post, keyword: string) => {
  return async (dispatch: Dispatch<BlogActionTypes>, getState: () => RootState): Promise<void> => {
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
  checkPostExistence,
  searchPostRank,
};

export default {
  setBlog,
  setPostRank,
};
