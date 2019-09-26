import { BlogActionTypes, BlogState } from '@src/features/blog/types';
import { Post } from './types';
import {
  CHECK_POST_EXISTENCE,
  SEARCH_BLOG,
  SEARCH_POST_RANK,
  SET_BLOG,
  SET_POST_PROPERTY,
} from './constants';

const setBlog = (blog: BlogState): BlogActionTypes => ({ type: SET_BLOG, payload: blog });

const setPostProperty = <T extends keyof Post>(
  index: number,
  key: T,
  value: Post[T],
): BlogActionTypes => ({
  type: SET_POST_PROPERTY,
  payload: { index, key, value },
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
