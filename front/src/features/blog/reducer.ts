import { BlogActionTypes, BlogState, SetPostPropertyAction, Post } from './types';
import { SET_BLOG, SET_POST_PROPERTY } from './constants';

const initialState: BlogState = {
  title: '',
  link: undefined,
  image: undefined,
  posts: [] as Array<Post>,
};

const setPostProperty = (state: BlogState, action: SetPostPropertyAction<keyof Post>) => {
  const { posts } = state;
  if (!posts) return state;

  const post = posts[action.payload.index];
  if (!post) return state;

  return {
    ...state,
    posts: [
      ...posts.slice(0, action.payload.index),
      { ...post, [action.payload.key]: action.payload.value },
      ...posts.slice(action.payload.index + 1),
    ],
  };
};

const blogReducer = (state: BlogState = initialState, action: BlogActionTypes): BlogState => {
  switch (action.type) {
    case SET_BLOG:
      return {
        ...state,
        ...action.payload,
      };

    case SET_POST_PROPERTY:
      return setPostProperty(state, action);

    default:
      return state;
  }
};

export default blogReducer;
