import { Blog, Post } from '@src/models/Blog';
import { BlogActionTypes } from '@src/features/blog/types';
import {
  CHECK_POST_EXISTENCE,
  SEARCH_BLOG,
  SEARCH_POST_RANK,
  SET_BLOG,
  SET_POST_PROPERTY,
} from './constants';

const setBlog = (blog: Blog): BlogActionTypes => ({ type: SET_BLOG, payload: blog });

const setPostProperty = (post: Post, id: keyof Post, value: any): BlogActionTypes => ({
  type: SET_POST_PROPERTY,
  payload: { post, id, value },
});

const searchBlog = (link: string): BlogActionTypes => ({
  type: SEARCH_BLOG,
  payload: link,
});

const searchPostRank = (post: Post, keyword: string): BlogActionTypes => ({
  type: SEARCH_POST_RANK,
  payload: { post, keyword },
});

const checkPostExistence = (post: Post, keyword: string): BlogActionTypes => ({
  type: CHECK_POST_EXISTENCE,
  payload: { post, keyword },
});

export { setBlog, setPostProperty, checkPostExistence, searchPostRank, searchBlog };
