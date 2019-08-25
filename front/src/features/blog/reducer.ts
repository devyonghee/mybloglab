import { BlogState, KeywordActionTypes } from './types';
import { SET_BLOG, SET_POST_RANK } from './constants';

const initialState: BlogState = {
  blog: null,
};

const keywordReducer = (
  state: BlogState = initialState,
  action: KeywordActionTypes
): BlogState => {

  switch (action.type) {
    case SET_BLOG:
      return {
        ...state,
        blog: action.blog,
      };

    case SET_POST_RANK:

      return state;

    default:
      return state;
  }
};

export default keywordReducer;