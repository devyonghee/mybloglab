import { BlogState, KeywordActionTypes } from './types';
import { SEARCH } from './constants';

const initialState: BlogState = {
  blogs: []
};

const keywordReducer = (
  state: BlogState = initialState,
  action: KeywordActionTypes
): BlogState => {

  switch (action.type) {
    case SEARCH:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default keywordReducer;