import { Post } from '@src/models/Blog';
import { BlogActionTypes, BlogState, SetPostPropertyAction } from './types';
import { SET_BLOG, SET_POST_PROPERTY } from './constants';

const initialState: BlogState = {
  blog: null,
};

const setPostProperty = (state: BlogState, action: SetPostPropertyAction<keyof Post>) => {
  const { blog } = state;
  if (!blog) return state;

  const post = blog.posts[action.payload.index];
  if (!post) return state;

  return {
    ...state,
    blog: {
      ...blog,
      posts: [
        ...blog.posts.slice(0, action.payload.index),
        { ...post, [action.payload.key]: action.payload.value },
        ...blog.posts.slice(action.payload.index + 1),
      ],
    },
  };
};

const keywordReducer = (state: BlogState = initialState, action: BlogActionTypes): BlogState => {
  switch (action.type) {
    case SET_BLOG:
      return {
        ...state,
        blog: action.payload,
      };

    case SET_POST_PROPERTY:
      return setPostProperty(state, action);

    default:
      return state;
  }
};

export default keywordReducer;
