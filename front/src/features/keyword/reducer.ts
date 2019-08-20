import { BlogState, KeywordActionTypes } from './types';
import { SET_BLOG_LIST } from './constants';
import { Blog } from '../../models/Blog';

const initialState: BlogState = {
  blogList: [] as Array<Blog>,
};

const keywordReducer = (
  state: BlogState = initialState,
  action: KeywordActionTypes
): BlogState => {

  switch (action.type) {
    case SET_BLOG_LIST:

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default keywordReducer;