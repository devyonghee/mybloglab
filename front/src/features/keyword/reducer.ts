import {
  addKeywordAction,
  KeywordActionTypes,
  KeywordState,
  SearchedKeyword,
} from '@src/features/keyword/types';
import { ADD_KEYWORD } from './constants';

const initialState = [] as Array<SearchedKeyword>;

const setKeyword = (state: KeywordState, action: addKeywordAction['payload']) => {
  console.log(action);
  return state;
};

const blogReducer = (state: KeywordState = initialState, action: KeywordActionTypes) => {
  switch (action.type) {
    case ADD_KEYWORD:
      return setKeyword(state, action.payload);
    default:
      return state;
  }
};

export default blogReducer;
