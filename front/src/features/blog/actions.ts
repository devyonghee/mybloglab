import { Blog, Post } from '@src/models/Blog';
import { BlogActionTypes } from '@src/features/blog/types';
import {
  CHECK_POST_EXISTENCE,
  SEARCH_BLOG,
  SEARCH_POST_RANK,
  SET_BLOG,
  SET_POST_EXISTENCE,
  SET_POST_RANK,
} from './constants';

const setBlog = (blog: Blog): BlogActionTypes => ({ type: SET_BLOG, payload: blog });

const setPostRank = (post: Post, rank: Number): BlogActionTypes => ({
  type: SET_POST_RANK,
  payload: { post, rank },
});

const setPostExistence = (post: Post, isExist: Boolean): BlogActionTypes => ({
  type: SET_POST_EXISTENCE,
  payload: { post, isExist },
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

export { setBlog, setPostRank, setPostExistence, checkPostExistence, searchPostRank, searchBlog };
