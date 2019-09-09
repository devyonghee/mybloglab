import { BlogActionTypes, BlogState, SetPostExistenceAction } from './types';
import { SET_BLOG, SET_POST_EXISTENCE, SET_POST_RANK } from './constants';

const initialState: BlogState = {
  blog: null,
};

const setPostExistence = (state: BlogState, action: SetPostExistenceAction) => {
  const { blog } = state;
  if (!blog) return state;

  const findPost = blog.posts.find(post => post === action.post);
  if (!findPost) return state;
  findPost.isExist = action.isExist;

  return {
    ...state,
    blog: {
      ...blog,
      posts: [...blog.posts],
    },
  };
};

const keywordReducer = (state: BlogState = initialState, action: BlogActionTypes): BlogState => {
  switch (action.type) {
    case SET_BLOG:
      return {
        ...state,
        blog: action.blog,
      };

    case SET_POST_EXISTENCE:
      return setPostExistence(state, action);
    case SET_POST_RANK:
      return state;

    default:
      return state;
  }
};

export default keywordReducer;
