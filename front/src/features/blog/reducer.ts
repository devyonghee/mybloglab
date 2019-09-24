import { BlogActionTypes, BlogState, SetPostPropertyAction } from './types';
import { SET_BLOG, SET_POST_PROPERTY } from './constants';

const initialState: BlogState = {
  blog: null,
};

const setPostProperty = (state: BlogState, action: SetPostPropertyAction) => {
  const { blog } = state;
  if (!blog) return state;

  const findIndex = blog.posts.findIndex(post => post === action.payload.post);
  if (!findIndex) return state;

  return {
    ...state,
    blog: {
      ...blog,
      posts: [
        ...blog.posts.slice(0, findIndex),
        { ...blog.posts[findIndex], [action.payload.id]: action.payload.value },
        ...blog.posts.slice(findIndex + 1),
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
