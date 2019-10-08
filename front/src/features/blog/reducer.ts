import { BlogActionTypes, BlogState, SetPostPropertyAction, Post } from './types';
import { SET_BLOG, SET_POST_PROPERTY } from './constants';

const initialState: BlogState = {
  title: '',
  link: undefined,
  image: undefined,
  posts: [] as Array<Post>,
};

const setPostProperty = (
  state: BlogState,
  action: SetPostPropertyAction<keyof Post>['payload'],
) => {
  const { posts } = state;
  if (!posts) return state;

  const post = posts[action.index];
  if (!post) return state;

  return {
    ...state,
    posts: [
      ...posts.slice(0, action.index),
      { ...post, [action.key]: action.value },
      ...posts.slice(action.index + 1),
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
      return setPostProperty(state, action.payload);

    default:
      return state;
  }
};

export default blogReducer;
