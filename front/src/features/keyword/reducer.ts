import { KeywordActionTypes } from '@src/features/keyword/types';

const initialState = {};

const blogReducer = (state: any = initialState, action: KeywordActionTypes) => {
  console.log(action);
  return state;
};

export default blogReducer;
