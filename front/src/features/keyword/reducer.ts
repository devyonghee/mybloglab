import { BlogState, KeywordActionTypes } from './types';
import { SET_BLOG } from './constants';

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

    default:
      return state;
  }
};

export default keywordReducer;